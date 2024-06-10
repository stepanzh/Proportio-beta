<template>
    <AppScreen>
        <template #nav>
            <AppNavBar title="Пересчитать рецепт">
                <template #left-menu>
                    <PIconButton>
                        <Bars3IconOutline />
                    </PIconButton>
                </template>
                <template #right-menu>
                    <PIconButton @click="proportio.navToHelp()">
                        <QuestionMarkCircleIconOutline />
                    </PIconButton>
                </template>
            </AppNavBar>
        </template>

        <template #body>
            <!-- Mode toggle -->
            <div class="mode-toggle">
                <PButton @click="setOriginal" label="Как в рецепте"
                    class="mode-toggle__left"
                    :class="{ 'btn-filled-primary': mode === Modes.original, 'btn-outlined': mode === Modes.scale }">
                    <template #icon>
                        <ListBulletIconMini />
                    </template>
                </PButton>
                <PButton @click="setScaled" label="Пересчитать"
                    class="mode-toggle__right"
                    :class="{ 'btn-filled-primary': mode === Modes.scale, 'btn-outlined': mode === Modes.original }">
                    <template #icon>
                        <CalculatorIconMini />
                    </template>
                </PButton>
            </div>

            <!-- Table and actions -->
            <div>
                <div class="calc-table-header">
                    <span class="txt-h-caption">Ингредиент</span>
                    <span class="txt-h-caption">Кол-во</span>
                    <span class="txt-h-caption">Ед. изм.</span>
                </div>
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
.table-row,
.calc-table-header {
    display: grid;
    grid-template-columns: minmax(128px, 320px) minmax(64px, 72px) minmax(56px, 72px);
    gap: 8px;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid var(--shuttle-gray-200);
}

.calc-table-header { margin-top: 4px; }

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


.mode-toggle {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.btn.mode-toggle__left,
.btn.mode-toggle__right {
    padding-left: 0;
    padding-right: 0;
}

.btn.mode-toggle__left {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.btn.mode-toggle__right {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
</style>