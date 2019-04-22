import { combineReducers } from 'redux';

import loadResults from './loadResults';
import addMedia from './addMedia';
import updateResults from './updateResults';
import handleSearchInputChange from './handleSearchInputChange';
import searchNew from './searchNew';

const rootReducer = combineReducers({
    results: loadResults,
    addMedia,
    updateResults,
    searchNew,
    searchInput: handleSearchInputChange,
});

export default rootReducer;
