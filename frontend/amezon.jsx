import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store/store';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root  = document.getElementById("root");

    //testing
    window.store = store
    //testing
    ReactDOM.render(<Root store={store}/>, root);
});

// npm install webpack webpack-cli react react-dom react-router-dom react-redux redux redux-logger @babel/core @babel/preset-react @babel/preset-env babel-loader --save