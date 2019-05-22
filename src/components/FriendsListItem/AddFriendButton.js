import React, { Component } from 'react';
import store from '../../store/store';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";

class AddFriendButton extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            isLoading: false,
        };
    }

    handleClick() {
        const { media, getUser, user } = this.props;
        const newMedia = Object.assign({}, media, {date_added: new Date()});
        let watchlist = user.watchlist ? user.watchlist : [];
        watchlist.push(newMedia);
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>clickAdd!!!  watchlist = ', watchlist);
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>> tmdb_id = ', media.id);
        this.setState({ isLoading: true }, () => {

            axios.post(
                '/watchlist/add-media',
                {
                    user,
                    watchlist,
                    tmdb_id: media.id,
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

export default AddFriendButton;
