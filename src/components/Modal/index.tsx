import React from "react";
import "./modal.scss";
import {connect, useDispatch, useSelector} from "react-redux";
import * as actions from "./services/modalAction";
import { RootState } from "../../store/reducers";

interface ModalProps {
    isOpenModal?: string
    children?: any
}
const Modal:React.FC<ModalProps> = props => {
    const dispatch = useDispatch()
    const { isOpenModal } = useSelector((state:RootState) => state.modalReducer)

    const {
        children
    } = props;

    return (
        <>
            {isOpenModal ? (
                <div className="modal">
                    <div className="modal-backdrop" onClick={() => dispatch(actions.closeModal())} />
                    <div className="modal-body">
                        <div className="modal-close">
                            <i className="material-icons" onClick={() => dispatch(actions.closeModal())} >clear</i>
                        </div>
                        <div className="modal-elements">
                            {
                                children
                            }
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default connect()(Modal);
