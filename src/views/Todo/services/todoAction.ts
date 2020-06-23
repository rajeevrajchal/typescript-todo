import * as actionTypes from './todoType'
export interface ITodo{
    name:string
    priority:number
}
const tasks = [
    {
        name:"yellow",
        priority:1
    },
]

export const fetchTaskSuccess = (fetchTask:any) => {
    return {
        type:actionTypes.GET_TASK,
        tasks:fetchTask
    }
}

export const getTask = () => (dispatch:any) =>  {
    dispatch(fetchTaskSuccess(tasks))
}

export const storeTask = (task:ITodo) => (dispatch:any) => {
    tasks.push(task)
    dispatch(getTask())
}