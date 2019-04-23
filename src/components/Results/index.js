import React from 'react';
import store from '../../store/store';
import ListItem from "../ListItem";

const Results = (props) => {
    const { mode, watchlist, tmdbResults, loadResults,} = props;
    let results;
    switch (mode) {
        case 'MODE/WATCHLIST':
            results = watchlist;
            store.dispatch(loadResults(watchlist));
            console.log('RESULTS: ', results);
            break;
        case 'MODE/ADD_NEW':
            results = tmdbResults;
            store.dispatch(loadResults(tmdbResults));
            console.log('RESULTS: ', results);
            break;
        default:
            break;
    }
    return (
        !results
            ? <div>Loading Watchlist...</div>
            : <div>
                {results.map(item => <ListItem item={item} key={item.title}/>)}
            </div>

    );
};

export default Results;
