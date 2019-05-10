import * as constants from '../constants/results';
import axios from "axios";

/**
 * Set user
 *
 * @param {userID} user
 * @returns {object} action
 */
const login = (userID) => {

    return dispatch => {
        axios.get('/users')
            .then((response) => {
                const user = response.data.results;
                dispatch(loginSuccess(user));
            })
            .catch(err => {
                console.log('error: ', err);
            });
    }
};

const loginSuccess = user => ({
    type: constants.LOAD_WATCHLIST,
    user,
});

// const loginStarted = () => ({
//     type: LOAD_WATCHLIST_STARTED
// });

// const loginFailure = error => ({
//     type: LOAD_WATCHLIST_FAILURE,
//     payload: {
//         error
//     }
// });

export default login;
