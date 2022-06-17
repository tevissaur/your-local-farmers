import { SET_CART_ARRAY, SET_CART_ITEMS } from "./cart.types"

export const setCartItems = (payload) => {
    return {
        type: SET_CART_ITEMS,
        payload
    }
}

export const setCartArray = (payload) => {
    return {
        type: SET_CART_ARRAY,
        payload
    }
}