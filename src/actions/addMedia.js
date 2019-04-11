import * as constants from '../constants/addMedia';

/**
 * Add new media item to watchList
 *
 * @param {object} media - {    title: STRING,
 *                              withWhom: [STRING]  }
 * @returns {object} action
 */
const addMedia = (media) => ({
    type: constants.ADD_MEDIA,
    media
});

export default addMedia;
