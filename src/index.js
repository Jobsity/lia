import React from 'react';
import ReactDOM from 'react-dom';
import './client/index.css';
import './client/styles/style.css';
import './../node_modules/react-grid-layout/css/styles.css';
import './../node_modules/react-resizable/css/styles.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './client/store.js';
import App from './client/App';

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
