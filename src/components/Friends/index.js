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
import axios from 'axios';
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
            friends: [],
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    };

    componentDidMount() {
        const { user } = this.props;
        this.setState({ friends: user.friends })
    };

    toggleMode = (value) => {
        const { user } = this.props;
        switch (value) {
            case 'friends':
                this.setState({
                    mode: value,
                    friends: user.friends
                });
                break;
            case 'addNew':
                this.setState({
                    mode: value,
                    friends: []
                });
                break;
            default:
                break;
        }
    };

    handleUsernameChange = (event) => {
        const { user } = this.props;
        let { mode, username } = this.state;
        this.setState({
            username: event.target.value,
        }, () => {
            if (mode === 'friends') {
                this.setState({
                    friends: user.friends.filter(n => n.includes(username)),
                })
            } else if (mode === 'addNew') {
                axios.get('/watchlist', {
                    params: {
                        username: username,
                    }
                })
                    .then((res) => {
                        this.setState({ filtered: res.body });
                    })
            }
        });
    };

    render() {
        const { friends } = this.state;
        const { user, setActiveModal } = this.props;
        // let list;
        // switch (mode) {
        //     case 'friends':
        //         list =
        //             <div className="friends-list">
        //                 { user.friends.map(item => <FriendsListItem
        //                     key={item}
        //                     item={item}
        //                     isFriend={true}
        //                 />) }
        //             </div>;
        //         break;
        //     case 'addNew':
        //         list =
        //             <div className="friends-list">
        //                 { axios.get('/watchlist', {
        //                     params: {
        //                         username: username,
        //                     }
        //                 })
        //                     .then((res) => {
        //                         res.body.map(item => <FriendsListItem
        //                             key={item}
        //                             item={item}
        //                             isFriend={user.friends.some(n => n === item)}
        //                         />)
        //                     })
        //                 }
        //             </div>;
        //         break;
        //     default:
        //         break;
        // }

        return (
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
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
                                    <Form
                                        inline
                                        onSubmit={e => {
                                            e.preventDefault();
                                            this.handleUsernameChange();
                                        }}
                                    >
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
                            <div className="friends-list">
                                { friends.map(item => <FriendsListItem
                                    key={item}
                                    item={item}
                                    isFriend={ user.friends.some(n => n === item) }
                                />) }
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default Friends;
