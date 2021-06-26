import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Reset } from 'styled-reset';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Reset/>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
);
