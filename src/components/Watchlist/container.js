import Watchlist from './index';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    results: state.results,
});

const WatchlistContainer = connect(mapStateToProps)(Watchlist);

export default WatchlistContainer;
