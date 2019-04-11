
const handleSearchInputChange = (state = null, action) => {
    switch (action.type) {
        case 'SEARCH/HANDLE_SEARCH_INPUT_CHANGE':
            return action.media || state;
        default:
            return state;
    }
};

export default handleSearchInputChange;
