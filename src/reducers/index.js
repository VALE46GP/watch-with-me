import { combineReducers } from 'redux';

import loadWatchlist from './loadWatchlist';
import addMedia from './addMedia';
import updateResults from './updateResults';
import handleSearchInputChange from './search';

const rootReducer = combineReducers({
    loadWatchlist,
    addMedia,
    updateResults,
    handleSearchInputChange,
});

export default rootReducer;
