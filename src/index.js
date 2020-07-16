import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { Provider } from 'react-redux';
import store from './redux/store'

const mainApp = (
  <Provider store={store}>
    <App></App>
  </Provider>)



ReactDOM.render(mainApp, document.getElementById('root'));

