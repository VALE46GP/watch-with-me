import React, { Component } from 'react';
import hash from '../../helperFunctions/hash'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";

class LoginButton extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isLoading: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { username, password, setUser } = this.props;
        if(!username.match(/^[0-9a-zA-Z]{1,16}$/)){
            alert("ALERT: Username must be 1-16 characters without any spaces or special symbols!");
        } else {
            // post newUser to db
            axios.post('/user/login', {
                username,
                password: hash(password),
            })
                // setUser in app state
                .then((response) => {
                    setUser(response.data);
                })
                .catch(err => {
                    console.log('error: ', err);
                });
        }
    }

    render() {
        const { isLoading } = this.state;

        return (
            <Button
                disabled={isLoading}
                onClick={!isLoading ? this.handleClick : null}
            >
                {isLoading
                    ? <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    : 'Login'}
            </Button>
        );
    }
}

export default LoginButton;
