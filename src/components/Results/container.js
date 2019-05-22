import Results from './index';
import { connect } from 'react-redux';
import handleSearchInputChange from "../../actions/handleSearchInputChange";
import handleModeChange from "../../actions/handleModeChange";
import searchNew from "../../actions/searchNew";
import loadResults from "../../actions/loadResults";

const mapStateToProps = (state) => {
    const {
        results,
        mode,
        user,
        tmdbResults,
        searchData,
        searchInput,
        activeModal,
    } = state;
    return ({
        results,
        mode,
        user,
        tmdbResults,
        searchData,
        searchInput,
        activeModal,
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        handleSearchInputChange: (mode, searchInput) => dispatch(handleSearchInputChange(mode, searchInput)),
        handleModeChange: (mode) => dispatch(handleModeChange(mode)),
        searchNew: (searchInput, page, currResults) => dispatch(searchNew(searchInput, page, currResults)),
        loadResults: (results) => dispatch(loadResults(results)),
    });
};

const ResultsContainer = connect(mapStateToProps, mapDispatchToProps)(Results);

export default ResultsContainer;
