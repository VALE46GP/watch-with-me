import * as constants from '../constants/users';
import axios from "axios";

/**
 * get user from db (used for most updates after login)
 *
 * @param {string} username
 * @returns {object} action
 */
const getUser = username => {
    console.log('USERNAME = ', username);


    return dispatch => {
        axios.get('/watchlist', {
            params: {
                username: username,
            }
        })
            .then((response) => {
                const { user } = response.data;
                user.watchlist = user.watchlist
                    ? user.watchlist.sort((a, b) => new Date(b.date_added) - new Date(a.date_added))
                    : [];
                dispatch(getUserSuccess(user));
            })
            .catch(err => {
                console.log('error: ', err);
            });
    }
};

const getUserSuccess = user => ({
    type: constants.SET_USER,
    user,
});

// const getUserStarted = () => ({
//     type: LOAD_WATCHLIST_STARTED
// });

// const getUserFailure = error => ({
//     type: LOAD_WATCHLIST_FAILURE,
//     payload: {
//         error
//     }
// });

export default getUser;
