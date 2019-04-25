import React from 'react';
import store from '../../store/store';
import ListItemContainer from "../ListItem/container";
import './index.css';

const Results = (props) => {
    const { mode, watchlist, tmdbResults, loadResults,} = props;
    let results;
    switch (mode) {
        case 'MODE/WATCHLIST':
            results = watchlist;
            store.dispatch(loadResults(watchlist));
            break;
        case 'MODE/ADD_NEW':
            results = tmdbResults;
            store.dispatch(loadResults(tmdbResults));
            break;
        default:
            break;
    }
    return (
        !results
            ? <div>...</div>
            : <div className="results-container">
                {results
                    .map(item => {
                        if (mode === 'MODE/ADD_NEW' && watchlist.some(e => e.title + e.id === item.title + item.id)) {
                            item.inWatchlist = true;
                        }
                        return <ListItemContainer item={item} key={item.id}/>
                    })
                }
            </div>

    );
};

export default Results;
