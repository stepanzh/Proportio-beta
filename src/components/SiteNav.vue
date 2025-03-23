<template>
    <div class="site-nav-wrapper">
        <nav class="site-nav">
            <div class="site-nav__logo">
                Пропорцио <span style="color: var(--shuttle-gray-200)">(бета)</span>
            </div>
            <PButton @click="proportioNav.navToSupport()" label="Поддержать" class="btn-outlined">
                <template #icon>
                    <HeartIconSolid class='txt-cerise-600' />
                </template>
            </PButton>
        </nav>
    </div>
</template>


<script setup>
import { useProportioNavStore } from '@/stores/proportioNav'

const proportioNav = useProportioNavStore()
</script>


<style>
.site-nav-wrapper {
    display: flex;
    justify-content: center;
    padding: 8px;
    background: white;
    box-shadow: var(--elevation-1);
}

.site-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 580px;
    min-height: 36px;
}

.site-nav__logo {
    font-size: 18px;
    font-weight: var(--weight-semibold);
}
</style>