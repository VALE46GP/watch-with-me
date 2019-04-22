import { combineReducers } from 'redux';

import loadResults from './loadResults';
import addMedia from './addMedia';
import updateResults from './updateResults';
import handleSearchInputChange from './filterResults';
import searchNew from './searchNew';

const rootReducer = combineReducers({
    loadWatchlist: loadResults,
    addMedia,
    updateResults,
    searchNew,
    handleSearchInputChange,
});

export default rootReducer;
