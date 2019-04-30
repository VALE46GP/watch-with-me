import * as constants from '../constants/results';
import axios from "axios";
import MOVIEDB_API_KEY from "../config/movieDb";


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
                console.log('searchNEW()');
                console.log('QUERY = ', query);
                console.log('PAGE = ', page);
                if (page === 1) {
                    dispatch(searchNewSuccess(response.data.results));
                    dispatch(loadSearchData(response.data));
                    console.log('response.data.results = ', response.data.results);
                } else {
                    const moreResults = currResults.concat(response.data.results);
                    console.log('response.data.results = ', response.data.results);
                    console.log('moreResults = ', moreResults);
                    dispatch(searchNewSuccess(moreResults));
                    dispatch(loadSearchData(response.data));
                }
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
