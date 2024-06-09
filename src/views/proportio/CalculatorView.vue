<template>
    <AppScreen>
        <template #nav>
            <AppNavBar title="Пересчитать рецепт">
                <template #left-menu>
                    <button>Меню</button>
                </template>
                <template #right-menu>
                    <button @click="proportio.navToHelp()">Помощь</button>
                </template>
            </AppNavBar>
        </template>

        <template #body>
            <!-- Mode toggle -->
            <div>
                <PButton @click="setOriginal" label="Как в рецепте" :class="{ 'btn-filled-primary': mode === Modes.original, 'btn-outlined': mode === Modes.scale }" />
                <PButton @click="setScaled" label="Пересчитать" :class="{ 'btn-filled-primary': mode === Modes.scale, 'btn-outlined': mode === Modes.original }"/>
            </div>

            <!-- Table and actions -->
            <div>
                <div>Здесь будет заголовок таблицы</div>
                <!-- TODO: state when there is no ingredients -->
                <OriginalTable v-if="mode === Modes.original" />
                <ScaledTable v-if="mode === Modes.scale" />
            </div>
        </template>
    </AppScreen>
</template>


<script setup>
import { ref } from 'vue'
import { useProportioCalculatorStore } from '@/stores/proportioCalculator'
import AppNavBar from '@/components/AppNavBar.vue'
import AppScreen from '@/components/AppScreen.vue'
import OriginalTable from '@/components/OriginalTable.vue'
import ScaledTable from '@/components/ScaledTable.vue'
import { useProportioNavStore } from '@/stores/proportioNav'


const proportio = useProportioNavStore()
const store = useProportioCalculatorStore()

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


<style>
.table-row {
    display: grid;
    grid-template-columns: minmax(128px, 320px) minmax(64px, 72px) minmax(56px, 72px);
    gap: 8px;
    align-items: center;
}

.cell-name,
.cell-amount,
.cell-unit {
    display: inline-block;
    padding: 4px 0;
}

.cell-unit {
    overflow: hidden;
    white-space: nowrap;
}
</style>