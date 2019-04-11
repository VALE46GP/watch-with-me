
const loadInitialResults = (state = null, action) => {
    console.log(action);
    switch (action.type) {
        case 'WATCHLIST/LOAD_INITIAL_RESULTS':
            return action.results || state;
        default:
            return state;
    }
};

export default loadInitialResults;
