import App from './index';
import { connect } from 'react-redux';
import loadWatchlist from '../../actions/loadWatchlist';

const mapStateToProps = (state) => {
    const { visibilityFilter, results } = state;
    return ({
        visibilityFilter,
        results,
    });
};

const mapDispatchToProps = (dispatch) => ({
    results: () => dispatch(loadWatchlist()),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);


export default AppContainer;
