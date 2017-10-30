import React from "react";
import ReactDOM from 'react-dom';
import {Router, Route} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import './styles/scss/style.css';

import App from './containers/App';
import { Header } from './components/Header';

//to connect react and redux we import Provider
import { Provider } from 'react-redux';
import store from './store';

const newHistory = createBrowserHistory();

//we pass const store to provider,to connect store with our react app
ReactDOM.render(
  <Provider store={store}>
    <Router history={newHistory}>
        <div>
            <Header/>
            <Route exact path="/" component={App} />
        </div>
    </Router>
  </Provider>,
  window.document.getElementById('root')
);
