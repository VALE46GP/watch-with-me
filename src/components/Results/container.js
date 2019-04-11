import Results from './index';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    results: state.loadWatchlist,
});

const ResultsContainer = connect(mapStateToProps)(Results);

export default ResultsContainer;
