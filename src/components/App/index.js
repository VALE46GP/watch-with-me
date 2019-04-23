import React, { Component } from 'react';
import ControlsContainer from '../Controls/container';
import ResultsContainer from '../Results/container';
import './index.css';
import store from "../../store/store";

class App extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        store.dispatch(() => this.props.loadWatchlist());
        store.dispatch(() => this.props.handleModeChange('MODE/WATCHLIST'));
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
