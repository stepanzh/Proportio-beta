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

    // Moves ingredient with `id` up, if possible
    function moveTowardsFirstOnce(id) {
        for (let i = 1; i < ingredients.value.length; i++) {
            let c = ingredients.value[i]
            if (c.id === id) {
                // (p) previous, (c) current,    see [ ... , p, c, ... ]
                // 1. Pop p; c at correct place, see [ ... , c, ... ]
                // 2. Insert p after c,          see [ ... , c, p, ... ]
                let removedP = ingredients.value.splice(i - 1, 1)
                let p = removedP[0]
                ingredients.value.splice(i, 0, p)
                break
            }
        }
    }

    function moveTowardsLastOnce(id) {
        for (let i = 0; i < ingredients.value.length - 1; i++) {
            let c = ingredients.value[i]
            if (c.id === id) {
                // (c) current, (n) next,        see [..., c, n, ...]
                // 1. Pop n, c at correct place, see [..., c, ...]
                // 2. Insert n before c,         see [..., n, c, ...]

                let removedN = ingredients.value.splice(i + 1, 1)
                let n = removedN[0]
                ingredients.value.splice(i, 0, n)
                break
            }
        }
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

    return {
        ingredients,
        add,
        remove,
        moveTowardsFirstOnce,
        moveTowardsLastOnce,
        emptyIngredient,
        onScaleAmountChanged,
        updateScaleAmounts
    }
})