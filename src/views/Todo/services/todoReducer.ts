import * as actionTypes from "./todoType"

export interface TodoState {
    tasks?: any
    singleTask?: object
}

const initialState:TodoState = {
    tasks:[],
    singleTask:{}
}

const todoReducer = (state = initialState, action:any)=> {
    switch (action.type) {
        case actionTypes.GET_TASK:
            return {
                ...state,
                tasks:action.tasks
            }
        case actionTypes.EDIT_TASK:
            return {
                ...state,
                singleTask:action.singleTask
            }
        default:
            return state
    }
}

export default todoReducer
