import React from 'react';
import RemoveMediaButton from './RemoveMediaButton';
import AddMediaButton from './AddMediaButton';
import './index.css';

const ListItem = (props) => {
    const {
        item,
        key,
        watchlist,
        loadWatchlist,
        mode,
        user,
    } = props;
    let addRemoveButton = mode === 'MODE/WATCHLIST' || item.hasOwnProperty('inWatchlist')
        ? <RemoveMediaButton
            data={item}
            userId={user._id}
            watchlist={watchlist}
            loadWatchlist={loadWatchlist}
            onClick={delete item.inWatchlist}
        />
        : <AddMediaButton
            media={item}
            user={user}
            watchlist={watchlist}
            loadWatchlist={loadWatchlist}
        />;

    return (
        <div className="list-item" key={key}>
            <div className="btn-div">
                {addRemoveButton}
            </div>
            <img
                className="media-img"
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt={item.title}
            />
        </div>
    );
};

export default ListItem;
