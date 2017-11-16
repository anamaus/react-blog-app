import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';//commented out for router demo
import registerServiceWorker from './registerServiceWorker';


//Redux
import {createStore, combineReducers, applyMiddleware} from "redux";

//impoer 3rd party middleware logger
import { createLogger } from 'redux-logger';

//Router Demo parts
import {Router,Route} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';

import {HeaderRouter} from './components/HeaderRouter';
import {HomeRouter} from './components/HomeRouter';
import {User} from './components/User';


//middleware is executed before the store(state) is changed.
const myLoggerMiddleware = (store) => (next) => (action) => {
  console.log("Action logged ", action);
  next(action);
}

//store is one big global object, one state to rule them all, that can have substates.
//store can be handled by multiple reducers that refers to one functionality.
//{} empty js object is the initial state
const store = createStore(combineReducers({mathReducer, userReducer}), {}, applyMiddleware(myLoggerMiddleware, createLogger()));


store.subscribe(() => {
    console.log("Store updated!", store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 100
});
store.dispatch({
    type: "ADD",
    payload: 22
});
store.dispatch({
    type: "SUBTRACT",
    payload: 80
});
store.dispatch({
    type: "SET_AGE",
    payload: 30
});

const newHistory = createBrowserHistory();
//browserHistory servs us for url handling inside the app.(no # style url).
//Tells the broswer to stay inside the app and not reach to the server which prevents 404 error


//<Route exact path="/" component={HomeRouter} /> = what gets loaded first
ReactDOM.render((
        <Router history={newHistory}>
            <div>
                <HeaderRouter/>
                <Route exact path="/" component={HomeRouter} />
                <Route path="/user:idName" component={User} />
                <Route path="/home" component={HomeRouter} />
            </div>
        </Router>
    ),
    document.getElementById("root")
);﻿
registerServiceWorker();
