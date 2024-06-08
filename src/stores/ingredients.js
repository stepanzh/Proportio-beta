import { computed, reactive, ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useIngredientsStore = defineStore('ingredients', () => {
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
        watch(() => ingr.originalAmount, () => { ingr.scaledAmount = NaN })

        ingr.displayedName = computed(() => ingr.name === '' ? '<Без названия>' : ingr.name )

        return ingr
    }

    function add() {
        const ingr = emptyIngredient()
        ingredients.value.push(ingr)
        // TODO: When there are some components and scale factor, update ingr.scaledAmount
    }

    function remove(id) {
        ingredients.value = ingredients.value.filter((x) => x.id != id)
    }

    function onScaleAmountChanged(forId) {
        console.log(`SAmount changed for ${forId}`)
        const changedIngr = ingredients.value.find((x) => x.id === forId)

        // TODO: NaNs
        const scaleFactor = changedIngr.scaledAmount / changedIngr.originalAmount
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

    return { ingredients, add, remove, emptyIngredient, onScaleAmountChanged, updateScaleAmounts }
})