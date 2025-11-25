<template>
    <my-button @click="open = true">
        Delete Task
    </my-button>

    <teleport to="body">
        <div v-if="open" class="modalBackground">
            <div class="modal">
                <h2>You sure?</h2>
                <div class="modalBtn">
                    <my-button @click="removeTask(task)">Yes</my-button>
                    <my-button @click="open = false">No</my-button>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
import MyButton from '@/UI/myButton.vue';
import { useTaskStore } from '@/stores/taskStore';

    export default {
        data(){
            return{
                open: false,
                taskStore: useTaskStore()
            }
        },
        components:{
            MyButton,
        },
        methods:{
            removeTask(id){
                if (id === undefined || id === null){
                    return;
                }
                this.taskStore.removeTask(id);
                this.open = false;
            },
        },
        props:{
            task: Number,
        }
    }
</script>

<style scoped>
.modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    text-align: center;
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    height: 300px;
    margin-left: -150px;
    border: 3px solid black;
    border-radius: 30px;
    background-color: #f2e8cf;
}
.modalBtn{
    display: flex;
    justify-content: center;
    align-items: center;
}
.modalBackground {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 998;
    top: 0;
    left: 0;
}
</style>