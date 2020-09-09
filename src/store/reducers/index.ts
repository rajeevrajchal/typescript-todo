import { combineReducers } from "redux";
import modalReducer from "../../components/Modal/services/modalReducer";
import todoReducer from "../../views/Todo/services/todoReducer";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    modalReducer,
    todoReducer
})


export default rootReducer;
