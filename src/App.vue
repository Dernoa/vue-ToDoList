<template>
    <div class="app">
        <div>
            <my-navbar class="navbar-app"></my-navbar>
        </div>
        <div>
            <todo-create></todo-create>
        </div>
        <div>
            <todo-view></todo-view>
        </div>
    </div>

</template>

<script>
import TodoCreate from './components/todoCreate.vue';
import MyNavbar from './UI/myNavbar.vue';
import todoView from './components/todoView.vue';
import TodoView from './components/todoView.vue';

    export default {
        components: {
            MyNavbar,
            TodoCreate,
            TodoView,
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