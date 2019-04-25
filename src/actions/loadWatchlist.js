import * as constants from '../constants/results';
import axios from "axios";

/**
 * loads initial results (the currently displayed watchlist) when App component mounts
 *
 * @returns {object} action
 */
const loadWatchlist = () => {
    return dispatch => {
        axios.get('/watchlist')
            .then((response) => {
                const watchlist = response.data.results
                    .sort((a, b) => new Date(b.date_added) - new Date(a.date_added));
                dispatch(loadWatchlistSuccess(watchlist));
            })
            .catch(err => {
                console.log('error: ', err);
            });
    }
};

const loadWatchlistSuccess = results => ({
    type: constants.LOAD_WATCHLIST,
    watchlist: results,
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

export default loadWatchlist;
