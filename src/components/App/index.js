import React, { Component } from 'react';
import ControlsContainer from '../Controls/container';
import ResultsContainer from '../Results/container';
import LoginContainer from '../Login/container';
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
                    show={modalShow}
                    onHide={modalClose}
                />
            );
    }
}

export default App;
