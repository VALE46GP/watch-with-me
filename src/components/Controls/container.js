import Controls from './index';
import { connect } from 'react-redux';
import handleVideoSearch from '../../actions/filterResults';
import searchNew from '../../actions/searchNew';
import * as constants from "../../constants/results";
import loadWatchlist from "../../actions/loadWatchlist";

// const mapStateToProps = (state) => ({
//     results: state.loadWatchlist,
//     mode: constants.MODE.WATCHLIST,
// });

const mapDispatchToProps = (dispatch) => ({
    // handleSearchInputChange: (query) => handleVideoSearch(query)(dispatch),
    searchNew: () => dispatch(searchNew())
});

const ControlsContainer = connect(null, mapDispatchToProps)(Controls);

export default ControlsContainer;
