
const loadInitialResults = (state = null, action) => {
    switch (action.type) {
        case 'WATCHLIST/LOAD_INITIAL_RESULTS':
            return action.media || state;
        default:
            return state;
    }
};

export default loadInitialResults;
