<template>
    <div>
        <div>
            <AppNavBar title="Изменить раскладку">
                <template #left-menu>
                    <button @click="proportio.navToCalc()">Назад</button>
                </template>
            </AppNavBar>
            <div>
                <div>Список ингредиентов</div>
                <ul v-if="store.ingredients.length">
                    <li v-for="ingr in store.ingredients" :key="ingr.id">
                        <button @click="store.remove(ingr.id)">Удалить</button>
                        <span>{{ ingr.displayedName }}</span>
                        <span>
                            <button @click="store.moveTowardsFirstOnce(ingr.id)">↑</button>
                            <button @click="store.moveTowardsLastOnce(ingr.id)">↓</button>
                        </span>
                    </li>
                </ul>
                <div v-else>
                    Ингредиентов нет, добавьте в калькуляторе
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import AppNavBar from '@/components/AppNavBar.vue'
import { useProportioCalculatorStore } from '@/stores/proportioCalculator'
import { useProportioNavStore } from '@/stores/proportioNav'

const proportio = useProportioNavStore()
const store = useProportioCalculatorStore()
</script>


<style scoped>

</style>