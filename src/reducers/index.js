import {combineReducers} from "redux";

//import reducers
import userReducer from "./userReducer";
import exampleReducer from "./exampleReducer";

//combine all the imported reducers into one const nthat we export and import in store.
const combinedReducers  = combineReducers({exampleReducer, userReducer});

export default combinedReducers;
