import React  from 'react';
import * as actions from '../../../../store/actions'
import {useDispatch} from "react-redux";

interface TaskListProps {
    task?:any
}


const TaskList:React.FC<TaskListProps> = (props) => {
    const dispatch = useDispatch()
    const {
        task
    } = props

    const handleDelete = (id:string) => {
        dispatch(actions.deleteTask(id))
    }

    const handleCheck = (task:any) => {
        dispatch(actions.checkTask(task))
    }

    return (
        <div className="task-item d-flex align-center">
            <div className="task-title flex-5">
                {task.complete ? <s> { task.title } </s> : task.title}
            </div>
            <div className="status-text flex-1">
                {task.priority}
            </div>
            <div className="task-actions d-flex align-center flex-2">
                {
                    !task.complete && (
                        <div className="task-check" onClick={():void =>handleCheck(task) } >
                            <i className="material-icons clickAbleIcon">done</i>
                        </div>
                    )
                }

                <div className="task-delete" onClick={():void =>handleDelete(task.id) }>
                    <i className="material-icons clickAbleIcon">delete</i>
                </div>

            </div>
            <div className="status" >
            </div>
        </div>
    );
};

export default TaskList;
