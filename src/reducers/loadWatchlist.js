import * as constants from '../constants/watchlist';

const loadWatchlist = (state = null, action) => {
    console.log('HERE: ', action.results);
    switch (action.type) {
        case constants.LOAD_WATCHLIST:
            return action.results || state;
        default:
            return state;
    }
};

export default loadWatchlist;
