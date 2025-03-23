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

    // Current app's home is calc screen
    const homeScreen = screens.calc

    function navToHome() { currentScreen.value = homeScreen }

    function navToCalc() { currentScreen.value = screens.calc }

    function navToEdit() { currentScreen.value = screens.edit }
    
    function navToHelp() { currentScreen.value = screens.help }
    
    function navToSupport() { currentScreen.value = screens.support }

    return { screens, homeScreen, currentScreen, navToHome, navToCalc, navToEdit, navToHelp, navToSupport }
})