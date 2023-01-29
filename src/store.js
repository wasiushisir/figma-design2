import { createStore,applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import sidebarReducer from "./reducers/sidebarReducer";


const store=createStore(sidebarReducer,composeWithDevTools(applyMiddleware(thunk)))
export default store
