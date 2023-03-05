import { SHOPHOMEPAGEUSER } from "../constants/shopHomePageConstant";



const initialstate={
    user:[]
}


const shopHompageReducer=(state=initialstate,actions)=>{
    switch(actions.type){
      
        case SHOPHOMEPAGEUSER:

        return{
            ...state,
            user:[actions.payload]

        }
        default:
            return state;
        
    }
}

export default shopHompageReducer