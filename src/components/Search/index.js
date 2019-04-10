import React from 'react';
import store from '../../store/store';
import handleSearchInputChange from '../../actions/search';

const Search = (props) => {
    const { searchInput } = props;
    const handleChange = (event) => {
        const query = event.target.value;
        store.dispatch(handleSearchInputChange(query));
    };
    return (
        <input
            className="text-input"
            type="text"
            value={searchInput}
            placeholder="Search..."
            onChange={handleChange}
        />
    );
};

export default Search;

/*
    handleSearchInputChange(event) {
        const searchInput = event.target.value;
        this.setState({
            searchInput,
        });
    }
*/
