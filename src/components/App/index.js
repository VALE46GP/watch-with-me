import React, { Component } from 'react';
import SearchContainer from '../Search/container';
import WatchlistContainer from '../Watchlist/container';
import './index.css';
import store from "../../store/store";
import loadWatchlist from "../../actions/loadWatchlist";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibilityFilter: 'SHOW_ALL',
            searchInput: '',
            all: [],
            results: [],
        };
    }

    componentDidMount() {
        store.dispatch(loadWatchlist());
        // axios.get('/watchlist')
        //     .then((response) => {
        //         console.log('results from axios request: ', response);
        //         this.setState({
        //             results: response.data.results,
        //         });
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    }

    render() {
        return (
            <div className="App">
                <SearchContainer />
                <WatchlistContainer />
            </div>
        );
    }
}

export default App;
