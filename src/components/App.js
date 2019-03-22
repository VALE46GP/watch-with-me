import React, { Component } from 'react';
import ListItem from './ListItem.js';
import Search from './Search.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      results: ['Pootie Tang', 'Cable Guy', 'Raising Arizona'],
    };
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  handleSearchInputChange(event) {
    const searchInput = event.target.value;
    this.setState({
        searchInput,
    });
  }

  render() {
    const { results } = this.state;
    return (
        <div className="App">
            <Search handleChange={this.handleSearchInputChange}/>
            {results.map(item => <ListItem item={item} key={item}/>)}
        </div>
    );
  }
}

export default App;
