import React from 'react';
import Search from './index';
import { connect } from 'react-redux';
import handleVideoSearch from '../../actions/search';
// import store from '../store/store.js';


const mapDispatchToProps = (dispatch) => ({
    handleSearchInputChange: (query) => handleVideoSearch(query)(dispatch)
});

const SearchContainer = connect(null, mapDispatchToProps)(Search);


export default SearchContainer;
