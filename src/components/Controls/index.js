import React from 'react';
import './index.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

const Controls = (props) => {
    const {
        searchInput,
        searchNew,
        handleSearchInputChange,
        handleModeChange,
        loadResults,
        mode,
        user,
        tmdbResults,
        searchData,
    } = props;

    const toggleMode = (value) => {
        handleModeChange(value);
        handleSearchInputChange(mode, '');
        switch (value) {
            case 'MODE/ADD_NEW':
                loadResults(tmdbResults);
                break;
            case 'MODE/WATCHLIST':
                loadResults(user.watchlist);
                // loadWatchlist('MODE/WATCHLIST');
                break;
            default:
                break;
        }
    };

    const handleChange = (event) => {
        event.preventDefault();
        const query = event.target.value;
        handleSearchInputChange(mode, query);
    };

    const searchButton = mode === 'MODE/ADD_NEW'
        ? <InputGroup.Append>
            <Button
                variant="outline-secondary"
                onClick={() => searchNew(searchInput)}
            >Search</Button>
        </InputGroup.Append>
        : null;

    let searchPlaceholder = '';
    if (mode === 'MODE/ADD_NEW' && searchData) {
        searchPlaceholder = searchData.total_results + ' results found...';
    } else if (mode === 'MODE/ADD_NEW') {
        searchPlaceholder = 'Search...';
    } else {
        searchPlaceholder = 'Filter...';
    }

    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
            <Navbar.Brand onClick={() => toggleMode('MODE/ADD_NEW')}>Watch-with-Me</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => toggleMode('MODE/WATCHLIST')}>Watchlist</Nav.Link>
                    <Nav.Link onClick={() => toggleMode('MODE/ADD_NEW')}>Add New</Nav.Link>
                    <NavDropdown title={user.username} id="basic-nav-dropdown">
                        <NavDropdown.Item href="">My Account</NavDropdown.Item>
                        <NavDropdown.Item href="">Friends</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="">Preferences</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline
                      onSubmit={e => {
                          e.preventDefault();
                          handleChange();
                      }}
                >
                    <FormControl
                        value={searchInput || ''}
                        placeholder={searchPlaceholder}
                        aria-label="Search..."
                        aria-describedby="basic-addon2"
                        onChange={handleChange}
                    />
                    {searchButton}
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Controls;
