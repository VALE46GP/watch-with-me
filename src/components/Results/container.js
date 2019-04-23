import Results from './index';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    const { results, mode, watchlist, tmdbResults } = state;
    return ({
        results,
        mode,
        watchlist,
        tmdbResults,
    })
};

const ResultsContainer = connect(mapStateToProps)(Results);

export default ResultsContainer;
