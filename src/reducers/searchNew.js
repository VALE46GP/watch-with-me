
const searchNew = (state = null, action) => {
    switch (action.type) {
        case 'TMDB/SEARCH_NEW':
            return action.searchInput || state;
        default:
            return state;
    }
};

export default searchNew;
