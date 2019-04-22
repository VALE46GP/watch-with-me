import * as constants from '../constants/results';
import axios from "axios";

/**
 * loads initial results (the currently displayed watchlist) when App component mounts
 *
 * @returns {object} action
 */
const loadResults = () => {
    return dispatch => {
        axios.get('/watchlist')
            .then((response) => {
                console.log('results from axios request: ', response);
                dispatch(loadResultsSuccess(response.data.results));
            })
            .catch(err => {
                console.log('error: ', err);
            });
    }
};

const loadResultsSuccess = results => ({
    type: constants.LOAD_RESULTS,
    results,
});

// const loadResultsStarted = () => ({
//     type: LOAD_WATCHLIST_STARTED
// });

// const loadResultsFailure = error => ({
//     type: LOAD_WATCHLIST_FAILURE,
//     payload: {
//         error
//     }
// });

export default loadResults;
