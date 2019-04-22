import React from 'react';
import store from '../../store/store';
import './index.css';
import handleSearchInputChange from '../../actions/handleSearchInputChange';
import searchNew from '../../actions/searchNew';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import loadWatchlist from "../../actions/loadWatchlist";

const Controls = (props) => {
    const { searchInput } = props;
    const handleChange = (event) => {
        const query = event.target.value;
        store.dispatch(handleSearchInputChange(query));
    };
    return (
        <InputGroup className="mb-3">
            <FormControl
                value={searchInput}
                placeholder="Filter or Search New"
                aria-label="Filter or Search New"
                aria-describedby="basic-addon2"
                onChange={handleChange}
            />
            <InputGroup.Append>
                <Button
                    variant="outline-secondary"
                    onClick={() => props.searchNew(searchInput)}
                >Search</Button>
            </InputGroup.Append>
        </InputGroup>
    );
};

export default Controls;
