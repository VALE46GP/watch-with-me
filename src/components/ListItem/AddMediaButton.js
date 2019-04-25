import React, { Component } from 'react';
import store from '../../store/store';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";

// function simulateNetworkRequest() {
//     return new Promise(resolve => setTimeout(resolve, 1000));
// }

class AddMediaButton extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            isLoading: false,
        };
    }

    handleClick() {
        const { data, loadWatchlist } = this.props;
        const moreDetails = {
            audience: [],
            date_added: new Date(),
        };
        this.setState({ isLoading: true }, () => {
            axios.post('/watchlist',
                Object.assign({}, data, moreDetails)
            )
                .then(() => {
                    store.dispatch(() => loadWatchlist());
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
                variant="primary"
                disabled={isLoading}
                onClick={!isLoading ? this.handleClick : null}
            >
                {isLoading
                    ? <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    : '+'}
            </Button>
        );
    }
}

export default AddMediaButton;
