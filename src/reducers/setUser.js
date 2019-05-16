
const setUser = (state = null, action) => {
    console.log('I am the setUser reducer... action = ', action);
    switch (action.type) {
        case 'USERS/SET_USER':
            return action.user || state;
        default:
            return state;
    }
};

export default setUser;
