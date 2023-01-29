import { SIDEBAR_LOAD_LIST } from "../constants/sidebarConstant"

const initialState={
    list:[]
}

const sidebarReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case SIDEBAR_LOAD_LIST:
            return{
                ...state,
                list:actions.payload
            }

            default:
                return state
    }
}


export default sidebarReducer