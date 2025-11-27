<template>
    <div class="navbar">
        <div>
            <h1>
                ToDo List
            </h1>
        </div>
        <div class="navbar-btn">
            <my-button @click="$router.push('/')">Main</my-button>
            <my-button @click="$router.push('/aboutUs')">About Us</my-button>
        </div>
    </div>
</template>

<script>
import MyButton from './myButton.vue';

    export default {
        components: {MyButton}
    }
</script>

<style scoped>
.navbar{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #386641;
}
.navbar-btn{
    display: flex;
    flex-direction: row;
}

</style>