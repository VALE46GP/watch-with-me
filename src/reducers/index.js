import { combineReducers } from 'redux';

import loadWatchlist from './loadWatchlist';
import addMedia from './addMedia';
import updateResults from './updateResults';
import handleSearchInputChange from './filterResults';
import searchNew from './searchNew';

const rootReducer = combineReducers({
    loadWatchlist,
    addMedia,
    updateResults,
    searchNew,
    handleSearchInputChange,
});

export default rootReducer;
