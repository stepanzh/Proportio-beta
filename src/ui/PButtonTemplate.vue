<template>
    <button class="btn">
        <div class="btn__content">
            <span class="btn__icon">
                <slot name="icon" />
            </span>
            <span class="btn__label">{{ label }}</span>
        </div>
    </button>
</template>


<script setup>
const props = defineProps({
    'label': { type: String }
})
</script>


<style>
.btn {
    cursor: pointer;
    font-size: 16px;
    line-height: 1;
    font-family: inherit;
    font-weight: var(--weight-semibold);
    border-radius: 8px;
}

.btn__content {
    /* Overpower (?) */
    display: flex;
    gap: 4px;
}

.btn__icon {
    /* Overpower (?) */
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 20px;
    max-height: 20px;
}

.btn__icon > svg {
    width: 16px;
    height: 16px;
}

.btn__label {
    display: inline-block;
    padding: 2px 0;
}

</style>