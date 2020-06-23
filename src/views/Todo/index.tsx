import React, {ChangeEvent, useEffect, useState} from 'react';
import {connect} from "react-redux";
import * as actions from '../../store/actions'
import { ITodo } from './services/todoAction'

interface TodoProps {
    tasks: any
    getTask():void
    storeTask(user:ITodo):void
}

const Todo:React.FC<TodoProps> = props => {
    const { tasks ,getTask, storeTask} = props
    const [task , setTask] = useState({} as any)

    useEffect(() => {
        getTask()
    })
    const inputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e:any) => {
        e.preventDefault()
        storeTask(task)
    }

    return (
        <>
            <div className="todos">
                <div className="todo-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label> Task  </label>
                            <input
                                    type="text"
                                   className="form-control"
                                   name="name"
                                   onChange={inputHandler}
                            />
                        </div>
                        <div className="form-group">
                            <label> Priority  </label>
                            <input type="number" className="form-control" name="priority" min={1} onChange={inputHandler}/>
                        </div>
                        <div className="form-group">
                            <button className="btn primary">
                                Add Task
                            </button>
                        </div>
                    </form>
                </div>
                <div className="todo-list">
                    <div className="title">
                        <h5>List of tasks</h5>
                    </div>
                    <div className="task-items">
                        <div className="task-item">
                            {
                                tasks.map((task:any,index:number) => (
                                    <p key={index}><span> => </span> {task.name} </p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state:any) => {
    return{
        tasks: state.todoReducer.tasks
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getTask:() => dispatch(actions.getTask()),
        storeTask:(task:ITodo) => dispatch(actions.storeTask(task))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
