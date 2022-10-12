import UtilsService from "../../services/utils.service"
import { GET_CART_ITEMS, SET_CART_ITEMS, SET_CART_OWNER, SET_CART_TOTAL } from "./cart.types"

/*  cart product structure
    {
        product: {
            _id: '',
            price: 0.00,
            quantity: {
                amount: 0,
                type: ''
            },
            farm: '',
            dateAdded: 0
        }
    }
*/

const initialState = {
    items: [],
    cartTotal: 0
}


export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CART_ITEMS:
            return {
                ...state,
                items: [
                    ...action.payload
                ]
            }
        case SET_CART_OWNER:
            return {
                ...state,
                cartOwner: action.payload
            }
        case SET_CART_TOTAL:
            return {
                ...state,
                cartTotal: action.payload
            }
        default:
            return state
    }
}
