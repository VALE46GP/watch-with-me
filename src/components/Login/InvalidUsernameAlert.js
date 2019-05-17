import React from 'react';
import Alert from "react-bootstrap/Alert";

const InvalidUsernameAlert = (props) => {
    const { username } = props;
    return username.match(/^[0-9a-zA-Z]{0,16}$/)
        ? <p> </p>
        : (
            <div>
                <Alert variant='danger'>
                    Username must be 1-16 characters without spaces and special symbols.
                </Alert>
            </div>
        );
};

export default InvalidUsernameAlert;
