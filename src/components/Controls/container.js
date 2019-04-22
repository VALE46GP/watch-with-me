import Controls from './index';
import { connect } from 'react-redux';
import handleSearchInputChange from '../../actions/handleSearchInputChange';
import searchNew from '../../actions/searchNew';

const mapStateToProps = (state) => {
    const { searchInput, results } = state;
    console.log('searchInput: ', searchInput);
    return ({
        searchInput,
        results,
    });
};

const mapDispatchToProps = (dispatch, state) => {
    const { searchInput } = state;
    return ({
        handleSearchInputChange: (searchInput) => dispatch(handleSearchInputChange(searchInput)),
        searchNew: (searchInput) => dispatch(searchNew(searchInput)),
    });
};

const ControlsContainer = connect(mapStateToProps, mapDispatchToProps)(Controls);

export default ControlsContainer;
