<template>
    <PButtonTemplate :label="label" class="btn-filled-primary">
        <template #icon>
            <slot name="icon" />
        </template>
    </PButtonTemplate>
</template>


<script setup>
const props = defineProps({
    'label': { type: String }
})
</script>


<style>
.btn-filled-primary {
    padding: 8px 32px;
    background-color: var(--blue-ribbon-600);
    color: white;
    border: none;
    outline: none;
}

.btn-filled-primary:hover { background-color: var(--blue-ribbon-700); }
.btn-filled-primary:active { background-color: var(--blue-ribbon-800); }
</style>