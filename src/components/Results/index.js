import React from 'react';
import store from '../../store/store';
import ListItemContainer from "../ListItem/container";

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
                {results
                    .sort((a, b) => new Date(b.date_added) - new Date(a.date_added))
                    .map(item => <ListItemContainer item={item} key={item.id}/>)}
            </div>

    );
};

export default Results;
