import * as constants from '../constants/users';
import hash from '../helperFunctions/hash'
import axios from "axios";

/**
 * Login user
 *
 * @param {string} username
 * @param {string} password
 * @returns {object} action
 */
const login = (username, password) => {
    // check if username is valid
    if(!username.match(/^[0-9a-zA-Z]{1,16}$/)){
        alert("ALERT: Username must be 1-16 characters without any spaces or special symbols!");
    } else {
        return dispatch => {
            axios.get('/users', {
                params: {
                    username,
                    password: hash(password),
                }
            })
                .then((response) => {
                    const user = response.data.results;
                    dispatch(loginSuccess(user));
                })
                .catch(err => {
                    console.log('error: ', err);
                });
        }
    }
};

const loginSuccess = user => ({
    type: constants.LOGIN,
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
