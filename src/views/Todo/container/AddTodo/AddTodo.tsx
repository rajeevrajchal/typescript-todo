import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import * as actions from "../../../../store/actions";

interface AddTodoProps {

}

const AddTodo:React.FC<AddTodoProps> = (props) => {

    const dispatch = useDispatch()
    const [task , setTask] = useState({} as any)

    const inputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })

    };

    const selectHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        e.persist();
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    };

    const onSave = (e:ChangeEvent<any>) => {
        e.preventDefault()
        dispatch(actions.storeTask(task))
    }

    return (
        <>
            <div className="add-todo">
                <form onSubmit={onSave}>
                    <div className="form-group">
                        <div className="input-box">
                            <input
                                type="text"
                                name="title"
                                placeholder={"title .."}
                                onChange={inputHandler}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-box">
                            <input
                                   type="text"
                                   name="estimated_time"
                                   placeholder={"estimated time .."}
                                   onChange={inputHandler}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-box">
                            <select name="priority" onChange={selectHandler} >
                                <option>Choose options </option>
                                <option>urgent </option>
                                <option>normal </option>
                            </select>
                        </div>
                    </div>
                    <div className="button-area">
                        <button type={"submit"} className="btn primary">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddTodo;
