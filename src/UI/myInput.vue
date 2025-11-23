<template>
    <div>
        <input :type="inputType" :placeholder="placeHolder" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    </div>
</template>

<script>
    export default {
        props: {
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
        },
        emits: ['update:modelValue']
    }
</script>

<style scoped>

</style>