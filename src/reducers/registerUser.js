
const registerUser = (state = null, action) => {
    switch (action.type) {
        case 'USERS/SIGNUP':
            return action.user || state;
        default:
            return state;
    }
};

export default registerUser;