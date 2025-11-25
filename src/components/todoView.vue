<template>
    <div class="taskContainer">
        <div>
            <h2>ToDo:</h2>
            <transition-group name="tasks">
                <div v-for="task in tasksToDo" :key="task.id">
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
            </transition-group>
            <h2>In-progress:</h2>
            <transition-group name="tasks">
                <div v-for="task in tasksInProgress" :key="task.id">
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
            </transition-group>
            <h2>Done:</h2>
            <transition-group name="tasks">
                <div v-for="task in tasksDone" :key="task.id">
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
            </transition-group>
            <h2>Cancelled:</h2>
            <transition-group name="tasks">
                <div v-for="task in tasksCancelled" :key="task.id">
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
                            <my-button @click="removeTask(task.id)">Delete Task</my-button>
                        </div>
                    </div>
                </div>
            </transition-group>
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
        computed: {
            tasksToDo(){
                return Array.from(this.taskStore.tasks.values()).filter((item) => item.status == 'todo')
            },
            tasksInProgress(){
                return Array.from(this.taskStore.tasks.values()).filter((item) => item.status == 'in-progress')
            },
            tasksDone(){
                return Array.from(this.taskStore.tasks.values()).filter((item) => item.status == 'done')
            },
            tasksCancelled(){
                return Array.from(this.taskStore.tasks.values()).filter((item) => item.status == 'cancelled')
            },
        }
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