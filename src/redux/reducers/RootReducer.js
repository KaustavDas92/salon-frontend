import { combineReducers } from "redux";
import AuthReducer  from "./AuthReducer";


console.log("auth Reducer=", AuthReducer)
const rootReducer=combineReducers({
   auth: AuthReducer,
});

export default rootReducer ;