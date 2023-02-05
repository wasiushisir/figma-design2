import { SIDEBAR_LOAD_LIST } from "../constants/sidebarConstant"


export const createList=()=>async(dispatch,getState)=>{
    const res= await fetch('https://backend.dokanbhai.dokanbhai.com:3002/api/add/category')
    const data=await res.json()

    if(data?.length)
    {
        dispatch({type:SIDEBAR_LOAD_LIST,payload:data})
    }
    
}

//http://dev.backend.dokanbhai.com:3003/api/add/category?fbclid=IwAR3MZhrgM3TguNcBgmY_LEojFY3bYgrt0YGiS_PEu9Lpt4O6Lrr6WdkDQrE