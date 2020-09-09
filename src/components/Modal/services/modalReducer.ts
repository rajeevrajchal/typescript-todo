import * as actionTypes from './modalType'
import { IMODE } from "./modalAction";

export interface ModalState {
    isOpenModal?: boolean
    mode?: IMODE
}

const initialState:ModalState = {
    isOpenModal:false,
    mode:{}
}

export default (state = initialState, action:any)=>{
    switch(action.type){
        case actionTypes.OPEN_MODAL:
            return{
                ...state,
                isOpenModal:true,
                mode: action.mode
            };
        case actionTypes.CLOSE_MODAL:
            return initialState
        default:
            return state
    }
}
