<template>
    <div class="taskContainer">
        <div>
            <h2>ToDo:</h2>
            <transition-group name="tasks">
                <todo-view-element :task-array="tasksToDo"></todo-view-element>
            </transition-group>
            <h2>In-progress:</h2>
            <transition-group name="tasks">
                <todo-view-element :task-array="tasksInProgress"></todo-view-element>
            </transition-group>
            <h2>Done:</h2>
            <transition-group name="tasks">
                <todo-view-element :task-array="tasksDone"></todo-view-element>
            </transition-group>
            <h2>Cancelled:</h2>
            <transition-group name="tasks">
                <todo-view-element :task-array="tasksCancelled"></todo-view-element>
            </transition-group>
        </div>
    </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/taskStore';
import { computed } from 'vue';
import TodoViewElement from './todoViewElement.vue';

const taskStore = useTaskStore(); 

const tasksToDo = computed(()=>{
    return Array.from(taskStore.tasks.values()).filter((item) => item.status == 'todo');
});
const tasksInProgress = computed(()=>{
    return Array.from(taskStore.tasks.values()).filter((item) => item.status == 'in-progress');
});
const tasksDone = computed(()=>{
    return Array.from(taskStore.tasks.values()).filter((item) => item.status == 'done');
});
const tasksCancelled = computed(()=>{
    return Array.from(taskStore.tasks.values()).filter((item) => item.status == 'cancelled');
})
</script>

<style scoped>
.taskContainer{
    margin: 5px;
}


.tasks-enter-active,
.tasks-leave-active {
  transition: all 0.3s ease;
}
.tasks-enter-from,
.tasks-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>