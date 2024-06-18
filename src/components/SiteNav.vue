<template>
    <div class="site-nav-wrapper">
        <nav class="site-nav">
            <div class="site-nav__logo">
                Пропорцио <span style="color: var(--shuttle-gray-200)">(бета)</span>
            </div>
            <PLinkButton href="https://forms.yandex.ru/u/664f4420f47e734f11464652/" target="_blank" class="p-link-btn-grab">
                Пройти опрос
            </PLinkButton>
        </nav>
    </div>
</template>


<script setup>

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