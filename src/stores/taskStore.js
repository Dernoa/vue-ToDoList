import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
    state: () => ({
        tasks: [],
    }),
    actions: {
        pushTask(task){
            this.tasks.push(Object.assign({},task));
        }
        ,
        removeTask(id){
            this.tasks = this.tasks.filter(t => t.id !== id);
        }
    }
})