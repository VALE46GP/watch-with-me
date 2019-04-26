import * as constants from '../constants/results';
import axios from "axios";
import MOVIEDB_API_KEY from "../config/movieDb";


/**
 * Searches TMDb for query
 *
 * @param {string} query
 * @param {number} page
 * @returns {object} action
 */
const searchNew = (query, page = 1) => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDB_API_KEY}&query=${query}&page=${page}`)
            .then((response) => {
                console.log(`REQUEST = https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDB_API_KEY}&query=${query}&page=${page}`);
                dispatch(loadSearchData(response.data));
                dispatch(searchNewSuccess(response.data.results));
            })
            .catch(err => {
                console.log('error: ', err);
            });
    }
};

const loadSearchData = searchData => ({
    type: constants.LOAD_SEARCH_DATA,
    searchData,
});

const searchNewSuccess = tmdbResults => ({
    type: constants.SEARCH_NEW,
    tmdbResults,
});

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
