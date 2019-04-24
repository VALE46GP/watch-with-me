import * as constants from '../constants/results';
import axios from "axios";

/**
 * Add new media item to watchList
 *
 * @param {object} media - {    title: STRING,
 *                              withWhom: [STRING]  }
 * @returns {object} action
 */
const addMedia = (media) => {

    return dispatch => {
        axios.post('/watchlist', {
            data: media
        })
            // .then((response) => {
            //     dispatch(addMediaSuccess(response.data.results));
            //     dispatch(loadResults(response.data.results));
            // })
            .catch(err => {
                console.log('error: ', err);
            });
    }
};

const addMediaSuccess = watchlist => ({
    type: constants.LOAD_WATCHLIST,
    watchlist: watchlist,
});

// const addMediaStarted = () => ({
//     type: LOAD_WATCHLIST_STARTED
// });

// const addMediaFailure = error => ({
//     type: LOAD_WATCHLIST_FAILURE,
//     payload: {
//         error
//     }
// });

export default addMedia;
