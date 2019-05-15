import * as constants from '../constants/users';
import hash from '../helperFunctions/hash'
import axios from "axios";

/**
 * Register user and password
 *
 * @param {string} username
 * @param {string} password
 * @returns {object} action
 */
const registerUser = (username, password) => {
    console.log('registerUser invoked with username: ', username);
    // check if username is valid
    if(!username.match(/^[0-9a-zA-Z]{1,16}$/)){
        alert("ALERT: Username must be 1-16 characters without spaces or special symbols!");
    } else {
        return dispatch => {
            axios.get('/users', {
                params: {
                    username,
                    password: hash(password),
                }
            })
                .then((response) => {
                    console.log('RESPONSE = ', response);
                    const user = response.data.results;
                    dispatch(registerUserSuccess(user));
                })
                .catch(err => {
                    console.log('error: ', err);
                });
        }
    }
};

const registerUserSuccess = user => ({
    type: constants.REGISTER_USER,
    user,
});

// const registerUserStarted = () => ({
//     type: LOAD_WATCHLIST_STARTED
// });

// const registerUserFailure = error => ({
//     type: LOAD_WATCHLIST_FAILURE,
//     payload: {
//         error
//     }
// });

export default registerUser;
