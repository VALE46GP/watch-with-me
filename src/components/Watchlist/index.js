import React from 'react';
import ListItem from "../WatchlistItem";

const Watchlist = ({ results }) => (
    !results
        ? <div>Loading Watchlist...</div>
        : <div>
            {results.map(item => <ListItem item={item} key={item.title}/>)}
        </div>

);

export default Watchlist;
