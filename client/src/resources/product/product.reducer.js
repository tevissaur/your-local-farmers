import { SET_PRODUCT_DATA } from "./product.types"

const initialState = {
    products: [],
    product: {},
    ui: {
        addReview: {
            content: '', 
            rating: 0
        }
    }
}

export function productReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCT_DATA:
            return {
                ...state,
                product: action.payload
            }
        default: 
            return state
    }
}