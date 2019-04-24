import React from 'react';
import AddMediaButton from './AddMediaButton';
import './index.css';

function ListItem(props) {
    const {
        item,
        key,
        watchlist,
        loadWatchlist,
    } = props;
    return (
        <div className="add-media-btn">
            <div className="list-item" key={key}>
                <div className="btn-div">
                    <AddMediaButton
                        data={item}
                        watchlist={watchlist}
                        loadWatchlist={loadWatchlist}
                    />
                </div>
                <img
                    className="media-img"
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                />
            </div>
        </div>
    );
}

export default ListItem;
