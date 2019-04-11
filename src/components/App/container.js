import App from './index';
import { connect } from 'react-redux';
import loadWatchlist from '../../actions/loadWatchlist';

const mapStateToProps = (state) => ({
    visibilityFilter: state.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
    loadInitialResults: (results) => loadWatchlist(results)(dispatch)
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);


export default AppContainer;
