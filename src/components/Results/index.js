import React from 'react';
import ListItemContainer from "../ListItem/container";
import { Waypoint } from 'react-waypoint';
import './index.css';

const Results = (props) => {
    const {
        mode,
        watchlist,
        tmdbResults,
        loadResults,
        searchNew,
        searchData,
        searchInput,
    } = props;
    const page = !searchData ? null : searchData.page;
    let results;
    switch (mode) {
        case 'MODE/WATCHLIST':
            results = watchlist;
            loadResults(watchlist);
            break;
        case 'MODE/ADD_NEW':
            results = tmdbResults;
            loadResults(tmdbResults);
            break;
        default:
            break;
    }
    const infiniteScroll = () => {
        if (tmdbResults && tmdbResults.length >= 20 && mode === 'MODE/ADD_NEW') {
            console.log('searchInput = ', searchInput);
            console.log('page = ', page);
            console.log('tmdbResults = ', tmdbResults);
            return (
                <Waypoint
                    onEnter={searchNew(searchInput, page + 1, tmdbResults)}
                    // onLeave={null}
                />
            )
        }
    };
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
                {infiniteScroll()}
            </div>

    );
};

export default Results;
