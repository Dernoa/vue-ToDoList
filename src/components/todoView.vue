<template>
    <div class="taskContainer">
        <div>
            <h2>ToDo:</h2>
            <div v-for="task in taskStore.tasks.values()" :key="task.id">
                <div v-if="task.status == 'todo'">
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
                            <my-button @click="switchStatus(task.id,1)">Start work</my-button>
                        </div>
                    </div>
                </div>
            </div>
            <h2>In-progress:</h2>
            <div v-for="task in taskStore.tasks.values()" :key="task.id">
                <div v-if="task.status == 'in-progress'">
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
                            <my-button @click="switchStatus(task.id,2)">Done</my-button>
                            <my-button @click="switchStatus(task.id,3)">Cancell</my-button>
                        </div>
                    </div>
                </div>
            </div>
            <h2>Done:</h2>
            <div v-for="task in taskStore.tasks.values()" :key="task.id">
                <div v-if="task.status == 'done'">
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
                            <my-button @click="removeTask(task.id)">Delete Task</my-button>
                        </div>
                    </div>
                </div>
            </div>
            <h2>Cancelled:</h2>
            <div v-for="task in taskStore.tasks.values()" :key="task.id">
                <div v-if="task.status == 'cancelled'">
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
                            <my-button @click="removeTask(task.id)">Delete Task</my-button>
                        </div>
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
            removeTask(id){
                if (id === undefined || id === null){
                    return;
                }
                this.taskStore.removeTask(id);
            },
            switchStatus(id, status){
                if (id === undefined || id === null){
                    return;
                }
                this.taskStore.switchStatus(id, status)
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