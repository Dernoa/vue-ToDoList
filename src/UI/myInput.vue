<template>
    <div>
        <input :type="inputType" :placeholder="placeHolder" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    </div>
</template>

<script setup>

defineProps({
    inputType: {
        type: String,
        required: true
    },
    placeHolder: {
        type: String,
    },
    modelValue: {
        type: String,
        default: ''
    }
});

defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>