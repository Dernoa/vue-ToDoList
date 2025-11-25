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

<script>
import MyButton from '@/UI/myButton.vue';
import MyInput from '@/UI/myInput.vue';
import { useTaskStore } from '@/stores/taskStore';

    export default {
        components: {MyInput, MyButton},
        data(){
            return {
                taskStore: useTaskStore(),
                task: {
                    title:'',
                    description:'',
                    status: '',
                    id: Date.now(),
                },
            }
        },
        methods:{
            pushTask(){
                if (this.task.title == ''){
                    alert('Write something in task title')
                    return
                }
                this.task.status = this.taskStore.taskStatus[0];
                this.taskStore.pushTask(this.task)
                this.task.title = '';
                this.task.description = '';
                this.task.id = Date.now();
            },
        }
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