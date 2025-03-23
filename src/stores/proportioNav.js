import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProportioNavStore = defineStore('proportio-nav', () => {
    const screens = Object.freeze({
        calc: 1,
        edit: 2,
        help: 3,
        support: 4
    })

    // Current app's home is calc screen
    const homeScreen = screens.calc

    // Initial screen
    const currentScreen = ref(homeScreen)

    const prevScreen = ref(homeScreen)

    function navToScreenById(screenId) {
        prevScreen.value = currentScreen.value
        currentScreen.value = screenId
    }

    function navToHome() { navToScreenById(homeScreen) }

    function navToCalc() { navToScreenById(screens.calc) }

    function navToEdit() { navToScreenById(screens.edit) }
    
    function navToHelp() { navToScreenById(screens.help) }
    
    function navToSupport() { navToScreenById(screens.support) }

    function navBack() { navToScreenById(prevScreen.value) }

    return {
        screens,
        homeScreen,
        currentScreen,
        navToScreenById,
        navToHome,
        navBack,
        navToCalc,
        navToEdit,
        navToHelp,
        navToSupport,
    }
})