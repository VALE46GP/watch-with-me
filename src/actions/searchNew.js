import * as constants from '../constants/watchlist';
import axios from "axios";
import MOVIEDB_API_KEY from "../config/movieDb";


/**
 * Searches TMDb for query
 *
 * @param {string} query
 * @returns {object} action
 */
const searchNew = () => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDB_API_KEY}&query=Matrix`)
            .then((response) => {
                console.log('results from axios request: ', response.data.results);
                dispatch(searchNewSuccess(response.data.results));
            })
            .catch(err => {
                console.log('error: ', err);
            });
    }
};

const searchNewSuccess = results => {
    console.log('constants.LOAD_RESULTS: ', constants.LOAD_RESULTS);
    return (
        {
            type: constants.LOAD_RESULTS,
            results,
        });
};

// const loadWatchlistStarted = () => ({
//     type: LOAD_WATCHLIST_STARTED
// });

// const loadWatchlistFailure = error => ({
//     type: LOAD_WATCHLIST_FAILURE,
//     payload: {
//         error
//     }
// });

export default searchNew;
