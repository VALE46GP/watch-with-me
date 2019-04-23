import Controls from './index';
import { connect } from 'react-redux';
import handleSearchInputChange from '../../actions/handleSearchInputChange';
import handleModeChange from '../../actions/handleModeChange';
import loadResults from '../../actions/loadResults';
import searchNew from '../../actions/searchNew';

const mapStateToProps = (state) => {
    const { searchInput, results, mode, watchlist, tmdbResults } = state;
    return ({
        searchInput,
        results,
        mode,
        watchlist,
        tmdbResults,
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        handleSearchInputChange: (mode, searchInput) => dispatch(handleSearchInputChange(mode, searchInput)),
        handleModeChange: (mode) => dispatch(handleModeChange(mode)),
        searchNew: (searchInput) => dispatch(searchNew(searchInput)),
        loadResults: (results) => dispatch(loadResults(results)),
    });
};

const ControlsContainer = connect(mapStateToProps, mapDispatchToProps)(Controls);

export default ControlsContainer;
