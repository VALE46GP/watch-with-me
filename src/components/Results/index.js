import React from 'react';
import ListItem from "../ListItem";

const Results = ({ results }) => (
    !results
        ? <div>Loading Watchlist...</div>
        : <div>
            {results.map(item => <ListItem item={item} key={item.title}/>)}
        </div>

);

export default Results;
