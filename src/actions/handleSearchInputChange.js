import * as constants from '../constants/controls';

/**
 * Handles Controls input change
 *
 * @param {string} mode
 * @param {string} searchInput
 * @returns {object} action
 */
const handleSearchInputChange = (mode, searchInput) => ({
    type: constants.HANDLE_SEARCH_INPUT_CHANGE,
    searchInput,
});

export default handleSearchInputChange;
