import App from './index';
import { connect } from 'react-redux';
import loadWatchlist from '../../actions/loadWatchlist';
import handleModeChange from '../../actions/handleModeChange';

const mapStateToProps = (state) => {
    const { results, mode } = state;
    return ({
        results,
        mode,
    });
};

const mapDispatchToProps = (dispatch) => ({
    loadWatchlist: () => dispatch(loadWatchlist()),
    handleModeChange: (mode) => dispatch(handleModeChange(mode)),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);


export default AppContainer;
