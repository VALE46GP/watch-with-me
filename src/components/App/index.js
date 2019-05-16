import React, { Component } from 'react';
import ControlsContainer from '../Controls/container';
import ResultsContainer from '../Results/container';
import LoginContainer from '../Login/container';
import './index.css';

class App extends Component {

    componentDidMount() {
        this.props.loadWatchlist();
        this.props.handleModeChange('MODE/WATCHLIST');
    }

    render() {
        const { user } = this.props;

        return user
            ? (
                <div className="App">
                    <ControlsContainer />
                    <ResultsContainer />
                </div>
            )
            : (
                <LoginContainer
                    show={!user}
                />
            );
    }
}

export default App;
