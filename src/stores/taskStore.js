import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
    state: () => ({
        tasks: new Map(),
        taskStatus: ['todo','in-progress', 'done', 'cancelled'],
    }),
    actions: {
        pushTask(task){
            this.tasks.set(task.id,Object.assign({},task))
        },
        removeTask(id){
            this.tasks.delete(id)
        },
        switchStatus(id,status){
            this.tasks.get(id).status = this.taskStatus[status];
        }
    }
})