import { combineReducers } from "redux";
import { userReducer } from "./user";
import { authReducer } from "./auth";

const appReducer = combineReducers({
    user: userReducer,
    auth: authReducer
});

export default appReducer;