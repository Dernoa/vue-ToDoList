<template>
    <div class="home">
        <todo-create></todo-create>
        <todo-view></todo-view>
    </div>
</template>

<script>
import TodoCreate from '../src/components/todoCreate.vue';
import TodoView from '../src/components/todoView.vue';

export default {
    components: {
        TodoCreate,
        TodoView,
    }
}
</script>

<style scoped>
.home {
    padding: 20px;
}
</style>
