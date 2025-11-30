<template>
    <div class="todoCreate">
        <div>
            <h2>
                Enter new task:
            </h2>
        </div>
        <div class="todoCreate-container">
            <div>
                <my-input input-type="text" place-holder="Your task title" v-model="task.title" class="todoCreate-inputs"></my-input>
                <my-input input-type="text" place-holder="task description" v-model="task.description" class="todoCreate-inputs"></my-input>
            </div>
            <div>
                <my-button @click="pushTask">Create</my-button>
            </div>    
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import MyButton from '@/UI/myButton.vue';
import MyInput from '@/UI/myInput.vue';
import { useTaskStore } from '@/stores/taskStore';

const taskStore = useTaskStore();
const task = reactive({
    title: '',
    description: '',
    status:'',
    id: Date.now(),
})

function pushTask(){
    if (task.title == ''){
        alert('Write something in task title')
        return
    }
    task.status = taskStore.taskStatus[0];
    taskStore.pushTask(task)
    task.title = '';
    task.description = '';
    task.id = Date.now();    
}
</script>

<style scoped>
.todoCreate{
    border: 2px solid black;
    border-radius: 8px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.todoCreate-container{
    display: flex;
    flex-direction: row;
    padding: 5px;
}
.todoCreate-inputs{
    margin: 2px;
}
</style>