import {combineReducers} from "redux";

//import reducers
import userReducer from "./userReducer";
import postReducer from "./postReducer";

//combine all the imported reducers and export, then import in store.
export default combineReducers({postReducer, userReducer});
