import Results from './index';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    const { results, searchInput } = state;
    return ({
        results,
        searchInput,
    })
};

const ResultsContainer = connect(mapStateToProps)(Results);

export default ResultsContainer;
