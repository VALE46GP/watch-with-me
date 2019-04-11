
const addMedia = (state = null, action) => {
    switch (action.type) {
        case 'WATCHLIST/ADD_MEDIA':
            return action.media || state;
        default:
            return state;
    }
};

export default addMedia;
