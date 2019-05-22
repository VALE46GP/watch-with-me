import React, { Component } from 'react';
import InvalidUsernameAlert from '../Login/InvalidUsernameAlert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import FriendsListItem from '../FriendsListItem/container.js'

class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    };

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value,
        })
    };

    render() {
        const { username } = this.state;
        const { user } = this.props;
        // const { addFriend, removeFriend } = this.props;
        return (
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body>
                        <h4>My Friends</h4>
                        <Button
                            variant="outline-danger"
                        >X</Button>
                        <InvalidUsernameAlert username={username}/>
                        <InputGroup className="mb-3">
                            <FormControl
                                value={username || ''}
                                placeholder="username..."
                                aria-label="username..."
                                aria-describedby="basic-addon2"
                                onChange={this.handleUsernameChange}
                            />
                        </InputGroup>
                        <div className="friends-list">
                            { user.friends.map(item => <FriendsListItem
                                key={item}
                                item={item}
                                isFriend={true}
                            />) }
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default Friends;