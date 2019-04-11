import * as constants from '../constants/loadWatchlist';

const loadWatchlist = (state = null, action) => {
    console.log(action);
    switch (action.type) {
        case constants.LOAD_WATCHLIST:
            return action.results || state;
        default:
            return state;
    }
};

export default loadWatchlist;
