import React, { Component } from 'react';
import store from '../../store/store';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";

class RemoveFriendButton extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            isLoading: false,
        };
    }

    handleClick() {
        const { item, getUser, user } = this.props;
        const friends = user.friends.filter((e) => e !== item);
        console.log('removing ', item);
        console.log('friends = ', friends);
        this.setState({ isLoading: true }, () => {
            axios.post(
                '/user/update-friends',
                {
                    friends,
                    username: user.username,
                }
            )
                .then(() => {
                    store.dispatch(() => getUser(user.username));
                })
                .then(() => {
                    this.setState({ isLoading: false });
                });
        });
    }

    render() {
        const { isLoading } = this.state;

        return (
            <Button
                variant="danger"
                disabled={isLoading}
                onClick={!isLoading ? this.handleClick : null}
            >
                {isLoading
                    ? <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    : '-'}
            </Button>
        );
    }
}

export default RemoveFriendButton;
