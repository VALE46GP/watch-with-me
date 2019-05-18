import * as results_constants from '../constants/results';
import * as controls_constants from '../constants/controls';
import axios from "axios";
import MOVIEDB_API_KEY from "../config/movieDb";
import handleSearchInputChange from './handleSearchInputChange';


/**
 * Searches TMDb for query
 *
 * @param {string} query
 * @param {number} page
 * @param {array} currResults
 * @returns {object} action
 */
const searchNew = (query, page = 1, currResults = []) => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDB_API_KEY}&query=${query}&page=${page}`)
            .then((response) => {
                const data = Object.assign({}, response.data, {query: query});
                if (page === 1) {
                    dispatch(searchNewSuccess(data.results));
                    dispatch(loadSearchData(data));
                } else {
                    dispatch(searchNewSuccess(
                        currResults.concat(data.results)
                    ));
                    dispatch(loadSearchData(data));
                }
            })
            .then(() => {
                dispatch(handleSearchInputChange(controls_constants.HANDLE_SEARCH_INPUT_CHANGE, ''));
            })
            .catch(err => {
                console.log('error: ', err);
            });
    }
};

const loadSearchData = searchData => ({
    type: results_constants.LOAD_SEARCH_DATA,
    searchData,
});

const searchNewSuccess = tmdbResults => ({
    type: results_constants.SEARCH_NEW,
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
