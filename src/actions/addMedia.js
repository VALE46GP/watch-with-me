/**
 * Add new media item to watchList
 *
 * @param {object} media - {    title: STRING,
 *                              withWhom: [STRING]  }
 * @returns {object} action
 */
var addMedia = (media) => ({
    type: 'ADD_MEDIA',
    media
});

export default addMedia;
