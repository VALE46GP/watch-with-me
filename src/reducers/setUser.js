
const setUser = (state = null, action) => {
    switch (action.type) {
        case 'USERS/SET_USER':
            return action.user || state;
        default:
            return state;
    }
};

export default setUser;
