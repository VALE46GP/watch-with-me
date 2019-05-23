import React, { Component } from 'react';
import InvalidUsernameAlert from '../Login/InvalidUsernameAlert';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import FriendsListItem from '../FriendsListItem/container.js';
import './index.css';

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            mode: 'friends',    // 'friends', 'addNew', 'detailsModal'
            filtered: [],
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    };

    toggleMode = (value) => {
        this.setState({ mode: value });
    };

    handleUsernameChange = (event) => {
        const { user } = this.props;
        let { mode, username } = this.state;
        this.setState({
            username: event.target.value,
        }, () => {
            if (mode === 'friends') {
                this.setState({
                    filtered: user.friends.filter(n => n.includes(username)),
                })
            } else if (mode === 'addNew') {
                // search db
                // set filtered with results
            }
        });
    };

    render() {
        const { username, mode, filtered } = this.state;
        const { user, setActiveModal } = this.props;
        let list;
        switch (mode) {
            case 'friends':
                list =
                    <div className="friends-list">
                        { user.friends.map(item => <FriendsListItem
                            key={item}
                            item={item}
                            isFriend={true}
                        />) }
                    </div>;
                break;
            default:
                break;
        }

        return (
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    bg="dark"
                    variant="dark"
                >
                    <Modal.Body
                        bsPrefix="friends-modal"
                    >
                        <div className="friends-modal-int">
                            <Navbar bg="dark" expand="lg" variant="dark">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <ButtonToolbar className="friends-modal-center">
                                        <ToggleButtonGroup
                                            type="radio"
                                            name="mode"
                                            defaultValue="friends"
                                            onChange={this.toggleMode}
                                        >
                                            <ToggleButton
                                                variant="secondary"
                                                value="friends"
                                            >My Friends</ToggleButton>
                                            <ToggleButton
                                                variant="secondary"
                                                value="addNew"
                                            >Add New</ToggleButton>
                                        </ToggleButtonGroup>
                                    </ButtonToolbar>
                                    <Form inline>
                                        <FormControl
                                            type="text"
                                            placeholder="Search"
                                            className="mr-sm-2"
                                            onChange={this.handleUsernameChange}
                                        />
                                    </Form>
                                </Navbar.Collapse>
                                <Button
                                    className="friends-modal-right"
                                    variant="outline-danger"
                                    onClick={() => setActiveModal('none')}
                                >X</Button>
                            </Navbar>
                            {list}
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default Friends;
