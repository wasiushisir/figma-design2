import { LOAD_PRODUCTS_FOR_YOU } from "../constants/productsForYouConstant"


export const loadProducts = (products) => {
    console.log(products)
    return {
        type: LOAD_PRODUCTS_FOR_YOU,
        payload: products,
    }
}