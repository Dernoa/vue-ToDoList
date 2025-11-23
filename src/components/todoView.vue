<template>
    <div class="taskContainer">
        <div>
            <h2>Tasks:</h2>
        </div>
        <div>
            <div v-for="task in taskStore.tasks" :key="task.id">
                <div class="taskContainerInfo">
                    <div>
                        <div>
                            <h2>{{ task.title }}</h2>
                        </div>
                        <div>
                            {{ task.description }}
                        </div>
                    </div>
                    <div class="taskBtn">
                        <my-button @click="taskComplete(task.id)">Completed</my-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useTaskStore } from '@/stores/taskStore';
import MyButton from '@/UI/myButton.vue';

    export default {
        
        data(){
            return{
                taskStore: useTaskStore(),
            }
        },
        components: {MyButton},
        methods: {
            taskComplete(id){
                if (id === undefined || id === null){
                    return;
                }
                this.taskStore.removeTask(id);
            }
        },
    }
</script>

<style scoped>
.taskContainer{
    margin: 5px;
}
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