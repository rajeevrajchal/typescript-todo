import { combineReducers } from "redux";
import modalReducer from "../../components/Modal/services/modalReducer";
import todoReducer from "../../views/Todo/services/todoReducer";

export default combineReducers({
    modalReducer,
    todoReducer
})
