import FilterResults from './index';
import { connect } from 'react-redux';
import handleVideoSearch from '../../actions/filterResults';


const mapDispatchToProps = (dispatch) => ({
    handleSearchInputChange: (query) => handleVideoSearch(query)(dispatch)
});

const FilterResultsContainer = connect(null, mapDispatchToProps)(FilterResults);


export default FilterResultsContainer;
