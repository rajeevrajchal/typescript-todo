import * as actionType from './modalType'

export interface IMODE {
    mode?: string
}

export const openModal = (mode?:IMODE) => {
    return {
        type: actionType.OPEN_MODAL,
        mode: mode
    }
}

export const closeModal = () => {
    return {
        type: actionType.CLOSE_MODAL
    }
}
