import React from 'react';
import './Nav.scss'
import AddTodo from "../../container/AddTodo/AddTodo";
import Modal from "../../../../components/Modal";
import * as actions from "../../../../store/actions";
import {connect, useDispatch} from "react-redux";
import {IMODE} from "../../../../components/Modal/services/modalAction";

interface NavProps {
    title: string
    mode?: IMODE
}

const Nav: React.FC<NavProps> = (props) => {
    const dispatch = useDispatch()
    const initiatModal = () => {
        const mode = {
            mode:"add_modal"
        }
        dispatch(actions.openModal(mode))
    }
    const {title, mode, } = props
    return (
        <>
            <nav>
                <div className="todo-navbar d-flex justify-between align-center">
                    <div className="logo-title">
                        {title}
                    </div>
                    <div className="nav-options">
                        <button className=" btn primary d-flex align-center " onClick={initiatModal}>
                            <i className="material-icons">add</i>
                            <span>Add Task</span>
                        </button>
                    </div>
                </div>
            </nav>
            <Modal>
                {
                    mode!.mode === "add_modal" && <AddTodo/>
                }
            </Modal>
        </>
    );
};

// const mapDispatchToProps = (dispatch:any) => {
//     return {
//         openModal: (mode?:IMODE) => dispatch(actions.openModal(mode))
//     };
// };
const mapStateToProps = (state:any) => {
    return {
        mode: state.modalReducer.mode
    };
};

export default connect(mapStateToProps,null)(Nav)
