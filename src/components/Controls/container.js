import Controls from './index';
import { connect } from 'react-redux';
import handleSearchInputChange from '../../actions/handleSearchInputChange';
import handleModeChange from '../../actions/handleModeChange';
import searchNew from '../../actions/searchNew';

const mapStateToProps = (state) => {
    const { searchInput, results, mode } = state;
    console.log('searchInput: ', searchInput);
    return ({
        searchInput,
        results,
        mode,
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        handleSearchInputChange: (mode, searchInput) => dispatch(handleSearchInputChange(mode, searchInput)),
        handleModeChange: (mode) => dispatch(handleModeChange(mode)),
        searchNew: (searchInput) => dispatch(searchNew(searchInput)),
    });
};

const ControlsContainer = connect(mapStateToProps, mapDispatchToProps)(Controls);

export default ControlsContainer;
