<template>
    <div>
        <div>
            <AppNavBar title="Изменить раскладку">
                <template #left-menu>
                    <button @click="proportio.navToCalc()">Назад</button>
                </template>
            </AppNavBar>
        </div>
    </div>
</template>


<script setup>
import AppNavBar from '@/components/AppNavBar.vue'
import { useProportioStore } from '@/stores/proportio'

const proportio = useProportioStore()
</script>


<style scoped>

</style>