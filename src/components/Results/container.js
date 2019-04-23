import Results from './index';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    const { results } = state;
    return ({
        results
    })
};

const ResultsContainer = connect(mapStateToProps)(Results);

export default ResultsContainer;
