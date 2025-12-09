<template>
    <div class="taskContainer">
        <div>
            <h2>ToDo:</h2>
            <transition-group name="tasks">
                <todo-view-element :task-array="groupTasksByStatus(allTasks,'todo')"></todo-view-element>
            </transition-group>
            <h2>In-progress:</h2>
            <transition-group name="tasks">
                <todo-view-element :task-array="groupTasksByStatus(allTasks,'in-progress')"></todo-view-element>
            </transition-group>
            <h2>Done:</h2>
            <transition-group name="tasks">
                <todo-view-element :task-array="groupTasksByStatus(allTasks,'done')"></todo-view-element>
            </transition-group>
            <h2>Cancelled:</h2>
            <transition-group name="tasks">
                <todo-view-element :task-array="groupTasksByStatus(allTasks,'cancelled')"></todo-view-element>
            </transition-group>
        </div>
    </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/taskStore';
import { computed } from 'vue';
import TodoViewElement from './todoViewElement.vue';

const taskStore = useTaskStore(); 

const allTasks = computed(() => {
    return Array.from(taskStore.tasks.values()).filter((item) => {
        if (taskStore.tasksFindIn) {
            return (item[taskStore.tasksFindIn].includes(taskStore.tasksFindWhat))
        } else {
            return true
        }
    });
})

function groupTasksByStatus(array , status){
    return array.filter((item) => item.status == status)
}

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