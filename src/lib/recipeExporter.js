export function RecipeExporter() {
    function _ingredientToObject(ingr) {
        return {
            name: ingr.name,
            amount: ingr.originalAmount,
            unit: ingr.unit,
        }
    }

    this.serializeToJson = function (ingredients) {
        if (ingredients.length < 1) {
            throw new Error('Ингредиенты отсутствуют')
        }

        let objectToSerialize = {
            title: '',
            original: ingredients.map((ingr) => _ingredientToObject(ingr)),
            credits: {
                author: '',
                url: '',
            },
        }

        let jsonString = JSON.stringify(objectToSerialize, null, 2)

        return jsonString
    }
}