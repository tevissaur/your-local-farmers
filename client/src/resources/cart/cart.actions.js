import { GET_CART_ITEMS, SET_CART_ITEMS, SET_CART_OWNER, SET_CART_TOTAL } from "./cart.types"

export const setCartItems = (payload) => {
    return {
        type: SET_CART_ITEMS,
        payload
    }
}

export const setCartOwner = (payload) => {
    return {
        type: SET_CART_OWNER,
        payload
    }
}

export const setCartTotal = (payload) => {
    return {
        type: SET_CART_TOTAL,
        payload
    }
}
