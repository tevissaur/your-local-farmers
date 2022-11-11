import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Cart } from "../../interfaces/ICart"

export interface CartState {
    cart: Cart;
}

const initialState: CartState = {
    cart: {
        products: [],
        total: 0
    } 
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartData: ((state, action: PayloadAction<Cart>) => {
            state.cart = action.payload
        })
    }
})

export const { setCartData } = cartSlice.actions

export default cartSlice.reducer