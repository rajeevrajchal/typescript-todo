import * as actionTypes from './todoType'

interface TodoState {
    tasks: any
}

const initialState:TodoState = {
    tasks:[]
}

const todoReducer = (state = initialState, action:any)=> {
    switch (action.type) {
        case actionTypes.GET_TASK:
            return {
                ...state,
                tasks:action.tasks
            }
        default:
            return state
    }
}

export  default todoReducer
