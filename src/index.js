import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import index from './redux-store';

ReactDOM.render(
  <Provider store={index}>
    <App />
  </Provider>,
  document.getElementById('root')
);
