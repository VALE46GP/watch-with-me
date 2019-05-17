import * as constants from '../constants/results';
import axios from "axios";

/**
 * loads watchlist from user
 *
 * @returns {object} action
 */
const loadWatchlist = user => ({
    type: constants.LOAD_WATCHLIST,
    watchlist: user.watchlist,
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
