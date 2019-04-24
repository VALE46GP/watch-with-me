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
    console.log('ITEM: ', item);
    console.log('watchlist.find(e => e.id === item.id) :: ', watchlist.find(e => e.id === item.id));
    let addRemoveButton = mode === ('MODE/WATCHLIST' || watchlist.find(e => e.id === item.id))
        ? <RemoveMediaButton
            data={item}
            watchlist={watchlist}
            loadWatchlist={loadWatchlist}
        />
        : <AddMediaButton
            data={item}
            watchlist={watchlist}
            loadWatchlist={loadWatchlist}
        />;

    return (
        <div className="add-media-btn">
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
        </div>
    );
}

export default ListItem;
