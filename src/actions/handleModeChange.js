import * as constants from '../constants/controls';
import loadWatchlist from './loadWatchlist';
import searchNew from './searchNew';
import store from "../store/store";

/**
 * Handles Controls mode change
 *
 * @param {string} mode
 * @returns {object} action
 */
const handleModeChange = (mode) => ({
    type: constants.HANDLE_MODE_CHANGE,
    mode,
});

export default handleModeChange;
