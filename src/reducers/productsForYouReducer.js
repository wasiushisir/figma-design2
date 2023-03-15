import { LOAD_PRODUCTS_FOR_YOU } from "../constants/productsForYouConstant";


const initialState = {
    products: [],
};

const productsForYouReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case LOAD_PRODUCTS_FOR_YOU:
            return {
                ...state,
                products: action.payload,
            }
        default:
            return state;
    }
}

export default productsForYouReducer;