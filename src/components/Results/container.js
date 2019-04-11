import Results from './index';
import { connect } from 'react-redux';
import * as constants from '../../constants/results';

const mapStateToProps = (state) => ({
    results: state.loadWatchlist,
    mode: constants.MODE.WATCHLIST,
});

const ResultsContainer = connect(mapStateToProps)(Results);

export default ResultsContainer;
