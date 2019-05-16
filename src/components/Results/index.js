import React from 'react';
import ListItemContainer from "../ListItem/container";
import { Waypoint } from 'react-waypoint';
import Button from 'react-bootstrap/Button';
import './index.css';

const Results = (props) => {
    const {
        mode,
        user,
        tmdbResults,
        loadResults,
        searchNew,
        searchData,
        searchInput,
    } = props;
    const page = !searchData ? null : searchData.page;
    const query = !searchData ? null : searchData.query;
    let results;
    switch (mode) {
        case 'MODE/WATCHLIST':
            results = user.watchlist;
            loadResults(user.watchlist);
            break;
        case 'MODE/ADD_NEW':
            results = tmdbResults;
            loadResults(tmdbResults);
            break;
        default:
            break;
    }
    // const infiniteScroll = () => {
    //     if (tmdbResults && tmdbResults.length >= 20 && mode === 'MODE/ADD_NEW') {
    //         console.log('searchInput = ', searchInput);
    //         console.log('page = ', page);
    //         console.log('tmdbResults = ', tmdbResults);
    //         return (
    //             <Waypoint
    //                 onEnter={searchNew(searchInput, page + 1, tmdbResults)}
    //                 // onLeave={null}
    //             />
    //         )
    //     }
    // };
    const loadMore = () => {
        if (tmdbResults && tmdbResults.length >= 20 && mode === 'MODE/ADD_NEW') {
            return (
                <Button onClick={() => searchNew(searchInput, page + 1, tmdbResults)}>Load More</Button>
            );
        }
    };
    return (
        !results
            ? <div>...</div>
            : <div className="results-container">
                {results
                    .map(item => {
                        if (mode === 'MODE/ADD_NEW' && user.watchlist.some(e => e.title + e.id === item.title + item.id)) {
                            item.inWatchlist = true;
                        } else if (mode === 'MODE/ADD_NEW') {
                            item.inWatchlist = false;
                        }
                        return <ListItemContainer item={item} key={item.id}/>
                    })
                }
                {loadMore()}
                {/*{infiniteScroll()}*/}
            </div>

    );
};

export default Results;
