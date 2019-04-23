import * as constants from '../constants/results';

const loadWatchlist = (state = null, action) => {
    switch (action.type) {
        case constants.LOAD_WATCHLIST:
            return action.watchlist || state;
        default:
            return state;
    }
};

export default loadWatchlist;
