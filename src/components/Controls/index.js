import React from 'react';
import store from '../../store/store';
import './index.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const Controls = (props) => {
    const {
        searchInput,
        searchNew,
        handleSearchInputChange,
        handleModeChange,
        loadResults,
        loadWatchlist,
        mode,
        watchlist,
        tmdbResults
    } = props;
    const toggleMode = (value) => {
        store.dispatch(handleModeChange(value));
        store.dispatch(handleSearchInputChange(mode, ''));
        switch (value) {
            case 'MODE/ADD_NEW':
                loadResults(tmdbResults);
                break;
            case 'MODE/WATCHLIST':
                loadResults(watchlist);
                store.dispatch(() => loadWatchlist('MODE/WATCHLIST'));
                break;
            default:
                break;
        }
    };
    const handleChange = (event) => {
        const query = event.target.value;
        store.dispatch(handleSearchInputChange(mode, query));
    };
    const searchButton = mode === 'MODE/ADD_NEW'
        ? <InputGroup.Append>
            <Button
                variant="outline-secondary"
                onClick={() => searchNew(searchInput)}
            >Search</Button>
        </InputGroup.Append>
        : null;
    return (
        <div>
            <ButtonToolbar>
                <ToggleButtonGroup
                    type="radio"
                    name="mode"
                    defaultValue="MODE/WATCHLIST"
                    onChange={toggleMode}
                >
                    <ToggleButton
                        value={'MODE/WATCHLIST'}
                    >Watchlist</ToggleButton>
                    <ToggleButton
                        value={'MODE/ADD_NEW'}
                    >Add New</ToggleButton>
                </ToggleButtonGroup>
            </ButtonToolbar>
            <InputGroup className="mb-3">
                <FormControl
                    value={searchInput}
                    placeholder="Search..."
                    aria-label="Search..."
                    aria-describedby="basic-addon2"
                    onChange={handleChange}
                />
                {searchButton}
            </InputGroup>
        </div>
    );
};

export default Controls;
