import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import './css/main.css';
import App from './components/App';

import { createStore } from 'redux';
import reducers from './reducers'; 
import { Provider } from 'react-redux';

const store = createStore(reducers);

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>,
        document.getElementById('app')
    );
}

render(App);

hot(module)(App);
