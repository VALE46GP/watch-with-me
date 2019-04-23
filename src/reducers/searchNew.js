import * as constants from '../constants/results';

const loadResults = (state = null, action) => {
    switch (action.type) {
        case constants.SEARCH_NEW:
            return action.tmdbResults || state;
        default:
            return state;
    }
};

export default loadResults;
