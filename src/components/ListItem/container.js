import ListItem from './index';
import { connect } from 'react-redux';
import loadWatchlist from "../../actions/loadWatchlist";

const mapStateToProps = (state) => {
    const {
        watchlist,
        mode,
        user
    } = state;
    return ({
        watchlist,
        mode,
        user,
    })
};

const mapDispatchToProps = dispatch => ({
    loadWatchlist: () => dispatch(loadWatchlist()),
});

const ListItemContainer = connect(mapStateToProps, mapDispatchToProps)(ListItem);

export default ListItemContainer;
