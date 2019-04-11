import * as constants from '../constants/loadInitialResults';
import axios from "axios";

/**
 * loads initial results (the currently displayed watchlist) when App component mounts
 *
 * @returns {object} action
 */
const loadInitialResults = () => {
    let results = [];
    axios.get('/watchlist')
        .then((response) => {
            console.log('results from axios request: ', response);
            results = response.data.results;
        })
        .catch(err => {
            console.log(err);
        });

    return ({
        type: constants.LOAD_INITIAL_RESULTS,
        results,
    });
};

export default loadInitialResults;
