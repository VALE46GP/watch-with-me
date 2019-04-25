import * as constants from '../constants/results';

const loadSearchData = (state = null, action) => {
    switch (action.type) {
        case constants.LOAD_SEARCH_DATA:
            return action.searchData || state;
        default:
            return state;
    }
};

export default loadSearchData;
