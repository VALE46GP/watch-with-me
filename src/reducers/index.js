import { combineReducers } from 'redux';

import addMedia from './watchlist';
import handleSearchInputChange from './search';

const rootReducer = combineReducers({
    addMedia,
    handleSearchInputChange,
});

export default rootReducer;
