<template>
    <div>
        <select v-model="value" @change="sendValue">
            <option disabled value="">Choose</option>
            <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
        </select>
    </div>
</template>

<script setup>
    let value;

    const emit = defineEmits([
        'changeOption',
    ]);

    function sendValue(){
        emit('changeOption', value )
    }

    defineProps({
        options: {
            type: Array,
            required: true,
        }
    })
</script>

<style scoped>
    select{
        background: none;
        font-weight: bold;
        border: 3px solid #0a2a2a;
    }
    select option{
        background-color: #fff7b1;
        font-weight: bold;
    }
</style>