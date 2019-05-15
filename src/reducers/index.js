import { combineReducers } from 'redux';

import loadResults from './loadResults';
import loadWatchlist from './loadWatchlist';
import setUser from './setUser';
import handleSearchInputChange from './handleSearchInputChange';
import handleModeChange from './handleModeChange';
import searchNew from './searchNew';
import loadSearchData from './loadSearchData';

const rootReducer = combineReducers({
    mode: handleModeChange,
    watchlist: loadWatchlist,
    tmdbResults: searchNew,
    searchData: loadSearchData,
    results: loadResults,
    user: setUser,
    searchInput: handleSearchInputChange,
});

export default rootReducer;
