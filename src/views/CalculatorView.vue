<template>
    <div>
        <!-- Mode toggle -->
        <div>
            <button @click="setOriginal">Как в рецепте</button>
            <button @click="setScaled">Пересчитать</button>
            <span>mode = {{ mode }}</span>
        </div>

        <!-- Table and actions -->
        <div>Здесь будет заголовок таблицы</div>
        <OriginalTable v-if="mode === Modes.original" />
        <ScaledTable v-if="mode === Modes.scale" />
    </div>
</template>


<script setup>
import { ref } from 'vue'
import { useIngredientsStore } from '@/stores/ingredients'
import OriginalTable from '@/components/OriginalTable.vue'
import ScaledTable from '@/components/ScaledTable.vue'


const store = useIngredientsStore()

const Modes = Object.freeze({
    original: 1,
    scale: 2
})

const mode = ref(Modes.original)

function setOriginal() { mode.value = Modes.original }

function setScaled() {
    // Validate original amounts
    const isAllOriginalAmountAreCorrect = !store.ingredients.some((ingr) => isNaN(ingr.originalAmount))
    const isValid = isAllOriginalAmountAreCorrect;

    if (!isValid) {
        alert('У некоторых ингредиентов не указано кол-во')
        return
    }

    // TODO: If enterred only one ingredient, show warning

    mode.value = Modes.scale
}
</script>


<style scoped>

</style>