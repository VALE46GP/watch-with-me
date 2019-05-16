import React, { Component } from 'react';
import store from '../../store/store';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";

class RemoveMediaButton extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            isLoading: false,
        };
    }

    handleClick() {
        const { media, loadWatchlist, user } = this.props;
        let watchlist = user.watchlist.slice();
        const index = watchlist.findIndex((e) => e.id === media.id);
        watchlist.splice(index, 1);
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>clickDelete!!!  watchlist = ', watchlist);
        this.setState({ isLoading: true }, () => {
            axios.post(
                '/watchlist',
                {
                    user,
                    watchlist,
                }
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

export default RemoveMediaButton;
