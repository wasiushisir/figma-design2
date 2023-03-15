import { combineReducers } from "redux";
import  { userRegisterReducer, userSigninReducer } from "./authReducer";
import productsForYouReducer from "./productsForYouReducer";
import productsReducer from "./productsReducer";
import shopHompageReducer from "./shopHomePageReducer";
import { shoppingComplexReducer } from "./shoppingComplexReducer";

import sidebarReducer from "./sidebarReducer";


const rootReducer=combineReducers({
    list:sidebarReducer,
    userSignin:userSigninReducer,
    userRegister:userRegisterReducer,
    shoppingComplex:shoppingComplexReducer,
    user:shopHompageReducer,
    productsReducer:productsReducer,
    productsForYou: productsForYouReducer
})


export default rootReducer