import * as constants from '../constants/loadInitialResults';
import axios from "axios";

/**
 * loads initial results (the currently displayed watchlist) when App component mounts
 *
 * @returns {object} action
 */
const loadInitialResults = () => {
    return dispatch => {
        axios.get('/watchlist')
            .then((response) => {
                console.log('results from axios request: ', response);
                dispatch(loadInitialResultsSuccess(response.data.results));
            })
            .catch(err => {
                console.log('error: ', err);
            });
    }
};

const loadInitialResultsSuccess = results => ({
    type: constants.LOAD_INITIAL_RESULTS,
    results,
});

// const loadInitialResultsStarted = () => ({
//     type: LOAD_INITIAL_RESULTS_STARTED
// });

// const loadInitialResultsFailure = error => ({
//     type: LOAD_INITIAL_RESULTS_FAILURE,
//     payload: {
//         error
//     }
// });

export default loadInitialResults;
