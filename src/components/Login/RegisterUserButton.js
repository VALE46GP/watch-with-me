import React, { Component } from 'react';
import store from '../../store/store';
import hash from '../../helperFunctions/hash'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";

// function simulateNetworkRequest() {
//     return new Promise(resolve => setTimeout(resolve, 1000));
// }

class RegisterUserButton extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isLoading: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { username, password, setUser } = this.props;
        console.log('CLICK!');
        console.log('username: ', username);
        console.log('password: ', password);
        if(!username.match(/^[0-9a-zA-Z]{1,16}$/)){
            alert("ALERT: Username must be 1-16 characters without any spaces or special symbols!");
        } else {
            // post newUser to db
            axios.post('/user', {
                username,
                password: hash(password),
            })
                .then((response) => {
                    console.log('>>>>>>>>>>>>>>>>>>>>>>>>user: ', response.data);
                    // setUser in app state
// *************** THIS DOESN'T DISPATCH THE ACTION AND PRODUCES AN ERROR: 'n is not a function' ******************* //
                    store.dispatch(() => {
                        setUser(response.data);
                    });
// *************** THIS TOO DOESN'T DISPATCH THE ACTION AND PRODUCES AN ERROR: 'n is not a function'**************** //
                    // setUser(response.data);
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
                variant="success"
                disabled={isLoading}
                onClick={!isLoading ? this.handleClick : null}
            >
                {isLoading
                    ? <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    : 'Register New User'}
            </Button>
        );
    }
}

export default RegisterUserButton;
