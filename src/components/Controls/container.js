import Controls from './index';
import { connect } from 'react-redux';
import handleVideoSearch from '../../actions/filterResults';
import * as constants from "../../constants/results";

const mapStateToProps = (state) => ({
    results: state.loadWatchlist,
    mode: constants.MODE.WATCHLIST,
});

const mapDispatchToProps = (dispatch) => ({
    handleSearchInputChange: (query) => handleVideoSearch(query)(dispatch)
});

const ControlsContainer = connect(mapStateToProps, mapDispatchToProps)(Controls);

export default ControlsContainer;
