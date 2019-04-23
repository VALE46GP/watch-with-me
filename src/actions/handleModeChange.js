import * as constants from '../constants/controls';
import loadResults from './loadResults';
import store from "../store/store";

/**
 * Handles Controls mode change
 *
 * @param {string} mode
 * @returns {object} action
 */
const handleModeChange = (mode) => {
    const { watchlist, tmdbResults } = store.getState();
    switch (mode) {
        case 'MODE/WATCHLIST':
            store.dispatch(loadResults(watchlist));
            break;
        case 'MODE/tmdbResults':
            store.dispatch(loadResults(tmdbResults));
            break;
        default:
            break;
    }

    return {
        type: constants.HANDLE_MODE_CHANGE,
        mode,
    };
};

export default handleModeChange;
