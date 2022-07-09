import { SET_PRODUCT_DATA } from "./product.types"

export const setSingleProduct = (payload) => {
    return {
        type: SET_PRODUCT_DATA,
        payload
    }
}
