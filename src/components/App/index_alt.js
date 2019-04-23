import React from 'react';
import ControlsContainer from '../Controls/container';
import ResultsContainer from '../Results/container';
import './index.css';

const App = (props) => {

    return (
        <div className="App">
            <ControlsContainer />
            <ResultsContainer />
        </div>
    );
};

export default App;
