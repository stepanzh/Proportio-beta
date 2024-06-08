<template>
    <nav class="app-nav">
        <!-- Левое меню -->
        <div>
            <slot name="left-menu"></slot>
        </div>

        <!-- Заголовок -->
        <span>{{ title }}</span>

        <!-- Правое меню -->
        <div>
            <slot name="right-menu"></slot>
        </div>
    </nav>
</template>


<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>


<style scoped>
.app-nav {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 8px;
}
</style>