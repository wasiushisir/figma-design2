import { useSelector } from "react-redux"
import { SHOPPINGCOMPLEX_LIST, SHOP_FILTER, SHOP_LIST } from "../constants/shoppingComplexConstant"

const initialState={
    shoppingComplex:[],
    shop:[],
    FilteredShop:[]
}

// const sd=useSelector((state)=>state?.shoppingComplex?.shop)

export const shoppingComplexReducer=(state=initialState,actions)=>{

    switch(actions.type){
        case SHOPPINGCOMPLEX_LIST:{
            return{
                ...state,
                shoppingComplex:actions.payload
            }
            
    }

    case SHOP_LIST:{
        return{
            ...state,
            shop:actions.payload
        }
    }

    case SHOP_FILTER:{
        console.log(actions.payload)
        return{
            ...state,
            FilteredShop:state?.shop?.filter((c)=>c?.seller?.marketName===actions.payload.name)

        }
    }

    default:
        return state

}
}