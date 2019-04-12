import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import AppContainer from './components/App/container';
import * as serviceWorker from './serviceWorker';
import store from './store/store.js';
import '@zendeskgarden/react-buttons/dist/styles.css';
import { ThemeProvider } from '@zendeskgarden/react-theming';

ReactDOM.render(
    <ThemeProvider>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </ThemeProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
