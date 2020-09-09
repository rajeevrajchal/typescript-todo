import React from "react";
import "./modal.scss";
import {connect, useDispatch} from "react-redux";
import * as actions from "./services/modalAction";

interface ModalProps {
    isOpenModal?: string
    children?: any
}
const Modal:React.FC<ModalProps> = props => {
    const dispatch = useDispatch()
    const {
        isOpenModal,
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

const mapStateToProps = (state?:any) => {
    return {
        isOpenModal: state.modalReducer.isOpenModal
    };
};

export default connect(
    mapStateToProps,
)(Modal);
