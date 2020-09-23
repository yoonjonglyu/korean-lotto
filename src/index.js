import React from 'react';
import ReactDOM from 'react-dom';
import { hot  } from 'react-hot-loader';
import './css/main.css'
import App from './components/App';


const render = (Component) => {
    ReactDOM.render(
        <Component />,
        document.getElementById('app')
        );
}

render(App);

hot(module)(App);
