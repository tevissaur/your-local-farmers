import UtilsService from "../../services/utils.service"
import { SET_CART_ARRAY, SET_CART_ITEMS } from "./cart.types"

const initialState = {
    items: JSON.parse(localStorage.getItem('cart')) || {},
    cart: UtilsService.cartItemsToArray(JSON.parse(localStorage.getItem('cart'))) || []
}


export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CART_ITEMS:
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.name]: {
                        ...action.payload.product
                    }
                },
            }
        case SET_CART_ARRAY:
            return {
                ...state,
                cart: action.payload
            }
        default: 
            return state
    }
}
