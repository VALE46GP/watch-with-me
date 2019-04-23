import { combineReducers } from 'redux';

import loadResults from './loadResults';
import addMedia from './addMedia';
import handleSearchInputChange from './handleSearchInputChange';
import handleModeChange from './handleModeChange';
import searchNew from './searchNew';

const rootReducer = combineReducers({
    results: loadResults,
    addMedia,
    searchNew,
    searchInput: handleSearchInputChange,
    mode: handleModeChange,
});

export default rootReducer;
