import Controls from './index';
import { connect } from 'react-redux';
import handleVideoSearch from '../../actions/filterResults';
import searchNew from '../../actions/searchNew';
import * as constants from "../../constants/results";
import loadResults from "../../actions/loadResults";

// const mapStateToProps = (state) => ({
//     results: state.loadResults,
//     mode: constants.MODE.WATCHLIST,
// });

const mapDispatchToProps = (dispatch) => ({
    // handleSearchInputChange: (query) => handleVideoSearch(query)(dispatch),
    searchNew: () => dispatch(searchNew())
});

const ControlsContainer = connect(null, mapDispatchToProps)(Controls);

export default ControlsContainer;
