
const updateResults = (state = null, action) => {
    switch (action.type) {
        case 'WATCHLIST/UPDATE_RESULTS':
            return action.media || state;
        default:
            return state;
    }
};

export default updateResults;
