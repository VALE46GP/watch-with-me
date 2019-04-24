import * as constants from '../constants/results';

/**
 * Add new media item to watchList
 *
 * @param {object} media - the new item to be added
 * @param {array} watchlist - before adding media
 * @returns {object} action
 */
const addMedia = (media, watchlist = []) => {
    const newMedia = Object.assign({}, media, {audience:[]});
    const newWatchlist = watchlist.slice();
    newWatchlist.push(newMedia);
    return {
        type: constants.LOAD_WATCHLIST,
        watchlist: newWatchlist,
    }
};

export default addMedia;
