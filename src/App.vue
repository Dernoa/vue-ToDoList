<template>
    <div class="app">
        <my-navbar class="navbar-app"></my-navbar>
        <router-view></router-view>
    </div>

</template>

<script>
import MyNavbar from './UI/myNavbar.vue';

    export default {
        components: {
            MyNavbar,
        }
    }
</script>

<style>
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: monospace;
        font-size: 2vh;
    }
    * h1{
        font-size: 4vh;
    }
    * h2{
        font-size: 3vh;
    }
    .navbar-app{
        position: sticky;
        top: 0px;
    }
    .app{
        background-color: #a7c957;
        min-height: 100vh;
    }
</style>