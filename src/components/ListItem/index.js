import React from 'react';
import RemoveMediaButton from './RemoveMediaButton';
import AddMediaButton from './AddMediaButton';
import './index.css';

function ListItem(props) {
    const {
        item,
        key,
        watchlist,
        loadWatchlist,
        mode,
    } = props;
    let addRemoveButton = mode === 'MODE/WATCHLIST' || item.hasOwnProperty('inWatchlist')
        ? <RemoveMediaButton
            data={item}
            watchlist={watchlist}
            loadWatchlist={loadWatchlist}
            onClick={delete item.inWatchlist}
        />
        : <AddMediaButton
            data={item}
            watchlist={watchlist}
            loadWatchlist={loadWatchlist}
        />;

    return (
        <div className="list-item" key={key}>
            <div className="add-media-btn">
                <div className="btn-div">
                    {addRemoveButton}
                </div>
                <img
                    className="media-img"
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    alt={item.title}
                />
            </div>
        </div>
    );
}

export default ListItem;
