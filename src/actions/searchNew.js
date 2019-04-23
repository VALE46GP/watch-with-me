import * as constants from '../constants/results';
import axios from "axios";
import MOVIEDB_API_KEY from "../config/movieDb";
import loadResults from "./loadResults";


/**
 * Searches TMDb for query
 *
 * @param {string} query
 * @returns {object} action
 */
const searchNew = (query = 'Matrix') => {
    // todo: format query
    console.log('action/searchNew: query = ', query);
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDB_API_KEY}&query=${query}`)
            .then((response) => {
                console.log('results from axios request: ', response.data.results);
                dispatch(searchNewSuccess(response.data.results));
                // dispatch(loadResults(response.data.results));
            })
            .catch(err => {
                console.log('error: ', err);
            });
    }
};

const searchNewSuccess = tmdbResults => {
    return (
        {
            type: constants.SEARCH_NEW,
            tmdbResults,
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
