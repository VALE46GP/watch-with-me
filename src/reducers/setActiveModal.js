import * as constants from '../constants/results';

const setActiveModal = (state = null, action) => {
    switch (action.type) {
        case constants.SET_ACTIVE_MODAL:
            return action.activeModal || state;
        default:
            return state;
    }
};

export default setActiveModal;
