import React from 'react';
import store from '../../store/store';
import handleSearchInputChange from '../../actions/filterResults';

const Controls = (props) => {
    const { searchInput } = props;
    const handleChange = (event) => {
        const query = event.target.value;
        console.log(query);
        store.dispatch(handleSearchInputChange(query));
    };
    return (
        <span>
            <input
                className="text-input"
                type="text"
                value={searchInput}
                placeholder="Search..."
                onChange={handleChange}
            />
        </span>
    );
};

export default Controls;
