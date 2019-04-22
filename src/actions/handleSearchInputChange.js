import * as constants from '../constants/controls';

/**
 * Handles Controls input change
 *
 * @param {string} searchInput
 * @returns {object} action
 */
const handleSearchInputChange = (searchInput) => ({
    type: constants.HANDLE_SEARCH_INPUT_CHANGE,
    searchInput,
});

export default handleSearchInputChange;
