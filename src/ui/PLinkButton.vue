<template>
    <a class="p-link-btn">
        <div class="p-link-btn__content">
            <span class="p-link-btn__icon">
                <slot name="icon" />
            </span>
            <span class="p-link-btn__text">
                <slot />
            </span>
        </div>
    </a>
</template>


<script setup>
const __name = 'PLinkButton'
</script>


<style>
/* TODO: Fix gap when no icon provided */
.p-link-btn__content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
}

/* TODO: DRY with PButton */
.p-link-btn__icon {
    display: flex;
    justify-items: center;
    align-content: center;
    max-width: 24px;
    max-height: 24px;
}

.p-link-btn__icon > svg {
    width: 20px;
    height: 20px;
}
</style>