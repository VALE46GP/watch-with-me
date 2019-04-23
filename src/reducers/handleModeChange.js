import * as constants from '../constants/controls';

const handleModeChange = (state = null, action) => {
    switch (action.type) {
        case constants.HANDLE_MODE_CHANGE:
            return action.mode;
        default:
            return state;
    }
};

export default handleModeChange;
