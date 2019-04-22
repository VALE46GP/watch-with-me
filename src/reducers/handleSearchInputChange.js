import * as constants from '../constants/controls';

const handleSearchInputChange = (state = null, action) => {
    console.log('action: ', action);
    switch (action.type) {
        case constants.HANDLE_SEARCH_INPUT_CHANGE:
            return action.searchInput || state;
        default:
            return state;
    }
};

export default handleSearchInputChange;
