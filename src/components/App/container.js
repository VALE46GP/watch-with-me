import App from './index';
import { connect } from 'react-redux';
import loadInitialResults from '../../actions/loadInitialResults';

const mapStateToProps = (state) => ({
    visibilityFilter: state.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
    loadInitialResults: (results) => loadInitialResults(results)(dispatch)
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);


export default AppContainer;
