import React, { Component } from 'react';
import ControlsContainer from '../Controls/container';
import ResultsContainer from '../Results/container';
import './index.css';

class App extends Component {
    // constructor(props) {
    //     super(props);
    // };

    componentDidMount() {
        this.props.loadWatchlist();
        this.props.handleModeChange('MODE/WATCHLIST');
    }

    render() {
        return (
            <div className="App">
                <ControlsContainer />
                <ResultsContainer />
            </div>
        );
    }
}

export default App;
