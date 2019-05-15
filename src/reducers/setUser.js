
const setUser = (state = null, action) => {
    switch (action.type) {
        case 'USERS/SET_USER':
            console.log('HMMMM - setUser reducer action=', action);
            return action.user || state;
        default:
            return state;
    }
};

export default setUser;
