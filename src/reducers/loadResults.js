import * as constants from '../constants/results';

const loadResults = (state = null, action) => {
    console.log('ACTION: ', action);
    switch (action.type) {
        case constants.LOAD_RESULTS:
            return action.results || state;
        default:
            return state;
    }
};

export default loadResults;
