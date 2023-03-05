import { LOADPRODUCTS } from "../constants/productsConstant";

const initialstate={
    
}


const productsReducer=(state=initialstate,actions)=>{
   switch(actions.type){
    case LOADPRODUCTS:
    return{
        ...state,
        products:actions.payload
        

    }

    default:
        return state;
   }


}


export default productsReducer