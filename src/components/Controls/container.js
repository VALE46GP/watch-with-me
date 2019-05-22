import Controls from './index';
import { connect } from 'react-redux';
import handleSearchInputChange from '../../actions/handleSearchInputChange';
import handleModeChange from '../../actions/handleModeChange';
import loadResults from '../../actions/loadResults';
import searchNew from '../../actions/searchNew';
import getUser from "../../actions/getUser";
import setActiveModal from "../../actions/setActiveModal";

const mapStateToProps = (state) => {
    const {
        searchInput,
        mode,
        tmdbResults,
        searchData,
        user,
    } = state;
    return ({
        searchInput,
        mode,
        tmdbResults,
        searchData,
        user,
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        handleSearchInputChange: (mode, searchInput) => dispatch(handleSearchInputChange(mode, searchInput)),
        handleModeChange: (mode) => dispatch(handleModeChange(mode)),
        searchNew: (searchInput) => dispatch(searchNew(searchInput)),
        loadResults: (results) => dispatch(loadResults(results)),
        getUser: (username) => dispatch(getUser(username)),
        setActiveModal: (activeModal) => dispatch(setActiveModal(activeModal)),
    });
};

const ControlsContainer = connect(mapStateToProps, mapDispatchToProps)(Controls);

export default ControlsContainer;
