import * as constants from '../constants/controls';

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
