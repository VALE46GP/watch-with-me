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
        const { data, watchlist, loadWatchlist } = this.props;
        this.setState({ isLoading: true }, () => {
            axios.delete('/watchlist', {
                params: {
                    id: data.id,
                    title: data.title,
                }
        })
                .then(() => {
                    console.log(data.title, ' removed from watchlist');
                    // const newWatchlist = watchlist.slice();
                    // newWatchlist.push(Object.assign({}, data, moreDetails));
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
