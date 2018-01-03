//Redux
import {createStore, applyMiddleware} from "redux";

//import 3rd party middleware logger
import { createLogger } from 'redux-logger';

//thunk is middleware used for async actions
import thunk from 'redux-thunk';


//import reducers
import combineReducers from "./reducers/index.js";

//get state from local storage
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};


//store is one big global object, one state to rule them all, that can have substates.
//store can be handled by multiple reducers that refers to one functionality.
//{} empty js object is the initial state
export default createStore(combineReducers, persistedState, applyMiddleware( thunk, createLogger()));
