import React from 'react';

function Search(props) {
    const { searchInput, handleChange } = props;
    return (
        <input
            className="text-input"
            type="text"
            value={searchInput}
            placeholder="Search..."
            onChange={handleChange}
        />
    );
}

export default Search;
