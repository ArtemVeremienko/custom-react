import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'mobx-react'
import stores from '~s/rootstore'

stores.products.load().then(() => {
  ReactDOM.render(
    <Provider stores={stores}>
      <App />
    </Provider>
    , document.getElementById('root'));
})
