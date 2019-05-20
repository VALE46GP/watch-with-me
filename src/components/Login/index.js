import React, { Component } from 'react';
import InvalidUsernameAlert from './InvalidUsernameAlert';
import RegisterUserButton from './RegisterUserButton';
import LoginButton from './LoginButton';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    };

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value,
        })
    };

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value,
        })
    };

    render() {
        const { username, password } = this.state;
        const { setUser } = this.props;
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <h4>Watch-with-Me</h4>
                    <InvalidUsernameAlert username={username}/>
                    <InputGroup className="mb-3">
                        <FormControl
                            value={username || ''}
                            placeholder="username..."
                            aria-label="username..."
                            aria-describedby="basic-addon2"
                            onChange={this.handleUsernameChange}
                        />
                        <FormControl
                            value={password || ''}
                            placeholder="password..."
                            aria-label="password..."
                            aria-describedby="basic-addon2"
                            onChange={this.handlePasswordChange}
                        />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <RegisterUserButton
                        username={username}
                        password={password}
                        setUser={setUser}
                    />
                    <LoginButton
                        username={username}
                        password={password}
                        setUser={setUser}
                    />
                </Modal.Footer>
            </Modal>
        );
    }
}

export default Login;
