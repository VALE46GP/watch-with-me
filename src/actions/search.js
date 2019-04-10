import * as constants from '../constants/search';

/**
 * Handles Search input change
 *
 * @param {string} query
 * @returns {object} action
 */
var handleSearchInputChange = (query) => ({
    type: constants.HANDLE_SEARCH_INPUT_CHANGE,
    query
});

export default handleSearchInputChange;
