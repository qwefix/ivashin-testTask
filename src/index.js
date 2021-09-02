import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/state';

ReactDOM.render(
  <Provider store={store}>
    <App state={store.getState()} />
  </Provider>,
  document.getElementById('root')
);