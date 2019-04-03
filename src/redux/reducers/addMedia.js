
var addMediaReducer = (state = null, action) => {
    switch (action.type) {
        case 'ADD_MEDIA':
            return action.media || state;
        default:
            return state;
    }
};

export default addMediaReducer;
