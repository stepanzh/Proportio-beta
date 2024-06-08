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
                        <span></span>
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
import { useIngredientsStore } from '@/stores/ingredients'
import { useProportioStore } from '@/stores/proportio'

const proportio = useProportioStore()
const store = useIngredientsStore()
</script>


<style scoped>

</style>