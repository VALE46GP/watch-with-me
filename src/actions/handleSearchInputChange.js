import * as constants from '../constants/controls';

/**
 * Handles Controls input change
 *
 * @param {string} mode
 * @param {string} searchInput
 * @returns {object} action
 */
const handleSearchInputChange = (mode, searchInput) => {
    // switch (mode) {
    //     case 'MODE/WATCHLIST':
    //         return ({
    //             type: constants.HANDLE_SEARCH_INPUT_CHANGE,
    //             searchInput,
    //         });
    //         break;
    //     case 'MODE/ADD_NEW':
    //         break;
    //     default:
    //         break;
    // }
    return ({
        type: constants.HANDLE_SEARCH_INPUT_CHANGE,
        searchInput,
    });
};

export default handleSearchInputChange;
