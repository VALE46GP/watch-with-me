import React, { Component } from 'react';
import ControlsContainer from '../Controls/container';
import ResultsContainer from '../Results/container';
import Login from '../Login/index';
import './index.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: true,
        };
    };

    componentDidMount() {
        this.props.loadWatchlist();
        this.props.handleModeChange('MODE/WATCHLIST');
    }

    render() {
        const { modalShow } = this.state;
        let modalClose = () => this.setState({ modalShow: false });

        return !modalShow
            ? (
                <div className="App">
                    <ControlsContainer />
                    <ResultsContainer />
                </div>
            )
            : (
                <Login
                    show={modalShow}
                    onHide={modalClose}
                />
            );
    }
}

export default App;
