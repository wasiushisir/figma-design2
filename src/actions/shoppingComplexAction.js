import { SHOPPINGCOMPLEX_LIST, SHOP_FILTER, SHOP_LIST } from "../constants/shoppingComplexConstant"


export const shoppingComplexList=()=>async(dispatch,getState)=>{
    const res=await fetch('https://backend.dokanbhai.dokanbhai.com:3002/api/newshop')
    const data=await res.json()
    // console.log(data)


    
    if(data?.length){
        dispatch({type:SHOPPINGCOMPLEX_LIST,payload:data})
    }
}



export const shopList=()=>async(dispatch,getState)=>{
    const res=await fetch('https://backend.dokanbhai.dokanbhai.com:3002/api/users/all-sellers?fbclid=IwAR39whHTiDDlUzwHcz4Kss4CsQgaiwccX1Z9TyoR3ize9W6GrvCebqnPH70')

    const data=await res.json()

    console.log(data)

    if(data?.length){
        dispatch({type:SHOP_LIST,payload:data})
    }
}


export const filterShop=(name)=>{
    return{
        type:SHOP_FILTER,
        payload:{
            name
        }
    }
}