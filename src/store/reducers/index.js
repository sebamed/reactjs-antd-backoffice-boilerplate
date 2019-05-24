import { combineReducers } from "redux";
import { userReducer } from "./user";
import { authReducer } from "./auth";
import { langReducer } from "./lang";

const appReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    lang: langReducer
});

export default appReducer;