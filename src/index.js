import React from "react";
import ReactDOM from 'react-dom';
import './index.css';

import App from './containers/App';

//to connect react and redux we import Provider
import { Provider } from 'react-redux';
import store from './store';


//we pass const store to provider,to connect store with our react app
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  window.document.getElementById('root')
);
