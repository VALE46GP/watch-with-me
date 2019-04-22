import App from './index';
import { connect } from 'react-redux';
import loadResults from '../../actions/loadResults';

const mapStateToProps = (state) => ({
    visibilityFilter: state.visibilityFilter,
    results: state.results,
});

const mapDispatchToProps = (dispatch) => ({
    loadInitialResults: (results) => loadResults(results)(dispatch)
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);


export default AppContainer;
