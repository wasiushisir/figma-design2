import { combineReducers } from "redux";
import  { userRegisterReducer, userSigninReducer } from "./authReducer";

import sidebarReducer from "./sidebarReducer";


const rootReducer=combineReducers({
    list:sidebarReducer,
    userSignin:userSigninReducer,
    userRegister:userRegisterReducer
})


export default rootReducer