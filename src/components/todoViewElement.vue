<template>
    <div v-for="task in taskArray" :key="task.id">
        <div class="taskContainerInfo">
                <div>
                    <div>
                        <h2>{{ task.title }}</h2>
                    </div>
                    <div>
                        {{ task.description }}
                    </div>
                </div>
                <div v-if="task.status == 'todo'">
                    <div class="taskBtn">
                        <my-button @click="switchStatus(task.id,1)">Start work</my-button>
                    </div>
                </div>
                <div v-else-if="task.status == 'in-progress'">
                    <div class="taskBtn">
                        <my-button @click="switchStatus(task.id,2)">Done</my-button>
                        <my-button @click="switchStatus(task.id,3)">Cancell</my-button>
                    </div>
                </div>
                <div v-else-if="task.status == 'done'">
                    <div class="taskBtn">
                        <confirm-modal :task="task.id"></confirm-modal>
                    </div>
                </div>
                <div v-else-if="task.status == 'cancelled'">
                    <div class="taskBtn">
                        <my-button @click="switchStatus(task.id,1)">Start work</my-button>
                        <confirm-modal :task="task.id"></confirm-modal>
                    </div>
                </div>
        </div>


    </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/taskStore';
import MyButton from '@/UI/myButton.vue';
import ConfirmModal from './confirmModal.vue';

const taskStore = useTaskStore(); 

function switchStatus(id,status){
    if (id === undefined || id === null){
        return;
    }
    taskStore.switchStatus(id, status)
}

defineProps({
    taskArray: {
        type: Array,
        required: true,
    }
})
</script>

<style scoped>
.taskContainerInfo{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid black;
    border-radius: 15px;
    margin-top: 5px;
}
.taskBtn{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 20px;
}
</style>