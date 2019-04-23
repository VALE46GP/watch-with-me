import React from 'react';
import ListItem from "../ListItem";

const Results = (props) => {
    const { mode, watchlist, tmdbResults } = props;
    let results;
    switch (mode) {
        case 'MODE/WATCHLIST':
            results = watchlist;
            // store.dispatch(loadResults(watchlist));
            break;
        case 'MODE/tmdbResults':
            results = tmdbResults;
            // store.dispatch(loadResults(tmdbResults));
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
