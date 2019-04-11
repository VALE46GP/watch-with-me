import { combineReducers } from 'redux';

import loadInitialResults from './loadInitialResults';
import addMedia from './addMedia';
import updateResults from './updateResults';
import handleSearchInputChange from './search';

const rootReducer = combineReducers({
    loadInitialResults,
    addMedia,
    updateResults,
    handleSearchInputChange,
});

export default rootReducer;
