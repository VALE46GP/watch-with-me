import ListItem from './index';
import { connect } from 'react-redux';
import addMedia from "../../actions/addMedia";
import loadWatchlist from "../../actions/loadWatchlist";

const mapStateToProps = (state) => {
    const { watchlist, mode } = state;
    return ({
        watchlist,
        mode,
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        // addMedia: (media, watchlist) => dispatch(addMedia(media, watchlist)),
        loadWatchlist: () => dispatch(loadWatchlist()),
    });
};

const ListItemContainer = connect(mapStateToProps, mapDispatchToProps)(ListItem);

export default ListItemContainer;
