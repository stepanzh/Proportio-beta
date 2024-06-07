<template>
    <div>
        <!-- Mode toggle -->
        <div>
            <button @click="setOriginal">Как в рецепте</button>
            <button @click="setScaled">Пересчитать</button>
            <span>mode = {{ mode }}</span>
        </div>
        <!-- Table -->
        <div v-for="ingr in ingredients" :key="ingr.id">
            <div>
                <div v-if="mode == Modes.original">
                    <TextField v-model="ingr.name" />
                    <OriginalAmount v-model="ingr.originalAmount" />
                    <TextField v-model="ingr.unit" />
                    <button @click="remove(ingr.id)">Удалить</button>
                </div>
                <div v-else-if="mode == Modes.scale">
                    <span>{{ ingr.name === '' ? 'empty-name' : ingr.name }}</span>
                    <ScaledAmount v-model="ingr.scaledAmount" />
                    <span>{{ ingr.unit === '' ? 'empty-unit' : ingr.unit }}</span>
                </div>
                <div v-else>Something went wrong... Check mode and Modes</div>
                <div>
                    <span>o = {{ ingr.originalAmount }};</span>
                    <span>s = {{ ingr.scaledAmount }};</span>
                    <span>n = {{ ingr.name }};</span>
                    <span>u = {{ ingr.unit }};</span>
                    <span>i = {{ ingr.id }};</span>
                </div>
            </div>
        </div>
        <!-- Actions -->
        <div>
            <div v-if="mode == Modes.original">
                <button @click="add">Добавить ингредиент</button>
            </div>
        </div>
    </div>
</template>


<script setup>
import { reactive, ref, watch } from 'vue'
import OriginalAmount from '@/components/OriginalAmount.vue'
import ScaledAmount from '@/components/ScaledAmount.vue'

const ingredients = ref([])

function emptyIngredient() {
    const ingr = reactive({
        id: crypto.randomUUID(),
        originalAmount: NaN,
        scaledAmount: NaN,
        name: '',
        unit: '',
    })

    ingr.stopWatchingScaledAmount = watch(() => ingr.scaledAmount, () => { onScaleAmountChanged(ingr.id) })
    return ingr
}

function add() {
    const ingr = emptyIngredient()

    // https://stackoverflow.com/questions/66652900/is-there-a-way-to-watch-a-specific-property-of-an-object-in-vue-3
    // watch(() => ingr.scaledAmount, () => { onScaleAmountChanged(ingr.id) })

    ingredients.value.push(ingr)
}

function remove(id) {
    ingredients.value = ingredients.value.filter((x) => x.id != id)
}


const Modes = Object.freeze({
    original: 1,
    scale: 2
})

const mode = ref(Modes.original)
function setOriginal() { mode.value = Modes.original }
function setScaled() { mode.value = Modes.scale }

function onScaleAmountChanged(forId) {
    console.log(`SAmount changed for ${forId}`)
    const changedIngr = ingredients.value.find((x) => x.id === forId)

    // TODO: NaNs
    const scaleFactor = changedIngr.scaledAmount/ changedIngr.originalAmount
    updateScaleAmounts(forId, scaleFactor)
}


function updateScaleAmounts(excludeId, scaleBy) {
    ingredients.value
        .filter((ingr) => ingr.id !== excludeId)
        .forEach((ingr) => {
            console.log(`${Date.now()} updateScaleAmounts: updating ${ingr.id}`)
            ingr.stopWatchingScaledAmount()
            ingr.scaledAmount = ingr.originalAmount * scaleBy
            // DRY
            ingr.stopWatchingScaledAmount = watch(() => ingr.scaledAmount, () => { onScaleAmountChanged(ingr.id) })
        })
}
</script>


<style scoped>

</style>