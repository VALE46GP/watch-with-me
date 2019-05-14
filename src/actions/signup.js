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
const signup = (username, password) => {
    // check if username is valid
    if(!username.match(/^[0-9a-zA-Z]{1,16}$/)){
        alert("ALERT: Username must be 1-16 characters without any spaces or special symbols!");
    } else {
        return dispatch => {
            // check if user exists

            // if not, add user to db
            axios.get('/users', {
                    params: {
                        username,
                        password: hash(password),
                    }
                })
                .then((response) => {
                    const user = response.data.results;
                    dispatch(signupSuccess(user));
                })
                .catch(err => {
                    console.log('error: ', err);
                });
        }
    }
};

// login user
const signupSuccess = user => ({
    type: constants.SIGNUP,
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

export default signup;
