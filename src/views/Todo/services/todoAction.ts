import * as actionTypes from './todoType'
import * as actions from '../../../store/actions'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

export interface ITodo{
    id:string
    title:string
    description:string
    priority:string
    complete: boolean
}

const db_url = process.env.REACT_APP_DB_URL

const fetchTaskSuccess = (tasks:ITodo) => {
    return {
        type:actionTypes.GET_TASK,
        tasks:tasks
    }
}

export const getTask = () =>async (dispatch:any) =>  {
    try {
       const response:any = await axios.get(`${db_url}/tasks`)
       dispatch(fetchTaskSuccess(response.data))
    }catch (e) {
        console.log(e)
    }
}

export const deleteTask = (id:string) => async (dispatch:any) =>  {
    try {
        const response:any = await axios.delete(`${db_url}/tasks/${id}`)
        console.log(response.data)
        dispatch(getTask())
    }catch (e) {
        console.log(e)
    }
}
export const checkTask = (task:ITodo) => async (dispatch:any) =>  {
    const taskToUpdate = {
        complete: true,
        title: task.title,
        priority: task.priority,
        id:task.id
    }
    try{
        const response:any = await axios.put(`${db_url}/tasks/${task.id}`,taskToUpdate)
        console.log(response.data)
        dispatch(getTask())
    }catch (e) {
        console.log(e)
    }
}

export const storeTask = (task:ITodo) => async (dispatch:any) => {
    const taskToStore = {
            id: uuidv4(),
            title: task.title,
            complete: task.complete,
            priority: task.priority
    }
    try {
        const response:any = await axios.post(`${db_url}/tasks`,taskToStore)
        console.log(response.data)
        dispatch(getTask())
        dispatch(actions.closeModal())
    }catch (e) {
        console.log(e)
    }
}
