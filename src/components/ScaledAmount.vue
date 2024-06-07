<template>
    <input v-model="user" @focus="isChangeByUser = true" @blur="isChangeByUser = false" type="text" :class="{ invalid: !isValid }" />
    <span>Focus: {{ isChangeByUser }}</span>
</template>


<script setup>
import { computed, ref, watch } from 'vue'

const model = defineModel({ required: true })

const user = ref(prettify(model.value))
const isValid = computed(() => user.value === '' ? true : validate(user.value))
const isChangeByUser = ref(false)

watch(user, () => {
    if (!isValid.value) {
        return
    }
    
    model.value = parseFloat(user.value.replace(',', '.'))
})

watch(model, () => {
    if (isChangeByUser.value) {
        return
    }
    user.value = prettify(model.value)
})

function validate(text) {
    const trimmed = text.trim()
    const re = /^\d+([,.]\d*)?$/
    const isNumber = re.test(trimmed)
    return isNumber
}

function prettify(number) {
    if (isNaN(number)) {
        return ''
    }

    // TODO: dot and comma
    return number.toPrecision(4)
}
</script>


<style scoped>
.invalid,
.invalid:focus {
    border-color: red;
    outline: 0;
}
</style>