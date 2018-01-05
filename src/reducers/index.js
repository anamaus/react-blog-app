import {combineReducers} from "redux";

//import reducers
import userReducer from "./userReducer";
import postReducer from "./postReducer";


const appReducer = combineReducers({
    userReducer,
    postReducer
});

const rootReducer = ( state, action ) => {
    if ( action.type === 'LOG_OUT' ) {
        state = action.payload;
    }

    return appReducer(state, action)
};



//combine all the imported reducers and export, then import in store.
export default rootReducer;
