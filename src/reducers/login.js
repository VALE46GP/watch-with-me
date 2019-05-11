
const login = (state = null, action) => {
    switch (action.type) {
        case 'USERS/LOGIN':
            return action.user || state;
        default:
            return state;
    }
};

export default login;
