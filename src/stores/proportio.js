import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProportioStore = defineStore('proportio', () => {
    const screens = Object.freeze({
        calc: 1,
        edit: 2,
        help: 3
    })

    const currentScreen = ref(screens.calc)

    function navToCalc() { currentScreen.value = screens.calc }

    function navToEdit() { currentScreen.value = screens.edit }
    
    function navToHelp() { currentScreen.value = screens.help }

    return { screens, currentScreen, navToCalc, navToEdit, navToHelp }
})