import * as constants from '../constants/results';

/**
 * updates results (the currently displayed watchlist)
 *
 * @param {[object]} results
 * @returns {object} action
 */
const updateResults = (results) => ({
    type: constants.UPDATE_RESULTS,
    results,
});

export default updateResults;
