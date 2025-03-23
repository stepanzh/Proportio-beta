<template>
  <div class="app-layout">
    <!-- <SiteNav />
    <ProportioView /> -->
    <h1 style="align-self: end;">Пропорцио переехал</h1>
    <p>Свежая версия поживает тут</p>
    <div>
      <a class="txt-h1" href="https://stepanzh.github.io/Proportio">https://stepanzh.github.io/Proportio</a>
    </div>
  </div>
</template>


<script setup>
import ProportioView from '@/views/proportio/ProportioView.vue'
import SiteNav from '@/components/SiteNav.vue'
import { useProportioCalculatorStore } from '@/stores/proportioCalculator'

const store = useProportioCalculatorStore()
store.add()

</script>


<style scoped>
/* .app-layout {
  display: grid;
  gap: 12px;
  grid-template-columns: auto;
  grid-template-rows: auto auto; 
} */
.app-layout {
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  justify-items: center;
  gap: 24px;
}
</style>