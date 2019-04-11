import Search from './index';
import { connect } from 'react-redux';
import handleVideoSearch from '../../actions/search';


const mapDispatchToProps = (dispatch) => ({
    handleSearchInputChange: (query) => handleVideoSearch(query)(dispatch)
});

const SearchContainer = connect(null, mapDispatchToProps)(Search);


export default SearchContainer;
