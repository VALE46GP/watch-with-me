import React, { Component } from 'react';
import axios from 'axios';
import ListItem from '../ListItem/index';
import SearchContainer from '../Search/container';
import './index.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibilityFilter: 'SHOW_ALL',
            searchInput: '',
            all: [],
            results: [{
                title: 'Pootie Tang',
                withwhom: ['Guillermo', 'Cynthia'],
            },],
        };
        // this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    }

    componentDidMount() {
        axios.get('/watchlist')
            .then((response) => {
                console.log('results from axios request: ', response);
                this.setState({
                    results: response.data.results,
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    // handleSearchInputChange(event) {
    //     const searchInput = event.target.value;
    //     this.setState({
    //         searchInput,
    //     });
    // }

    render() {
        const { results } = this.state;
        return (
            <div className="App">
                {/*<Search handleChange={this.handleSearchInputChange}/>*/}
                <SearchContainer />
                {results.map(item => <ListItem item={item} key={item.title}/>)}
            </div>
        );
    }
}

export default App;
