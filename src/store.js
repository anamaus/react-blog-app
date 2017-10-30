//Redux
import {createStore, applyMiddleware} from "redux";

//import 3rd party middleware logger
import { createLogger } from 'redux-logger';

//thunk is middleware used for async actions
import thunk from 'redux-thunk';

//import reducers
import combinedReducers from "./reducers/index.js";

//store is one big global object, one state to rule them all, that can have substates.
//store can be handled by multiple reducers that refers to one functionality.
//{} empty js object is the initial state
export default createStore(combinedReducers, {}, applyMiddleware(createLogger(), thunk));
