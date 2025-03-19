import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProportioNavStore = defineStore('proportio-nav', () => {
    const screens = Object.freeze({
        calc: 1,
        edit: 2,
        help: 3,
        support: 4
    })

    const currentScreen = ref(screens.calc)

    function navToCalc() { currentScreen.value = screens.calc }

    function navToEdit() { currentScreen.value = screens.edit }
    
    function navToHelp() { currentScreen.value = screens.help }
    
    function navToSupport() { currentScreen.value = screens.support }

    return { screens, currentScreen, navToCalc, navToEdit, navToHelp, navToSupport }
})