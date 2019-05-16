import * as constants from '../constants/users';

/**
 * set user (used on login)
 *
 * @param {object} user
 * @returns {object} action
 */
const setUser = user => {
    console.log('>>>>>>>>>> setUser action called!!');
    return ({
        type: constants.SET_USER,
        user,
    });
};

export default setUser;
