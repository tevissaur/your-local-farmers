import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, ICartProduct } from "../../interfaces/ICart";
import { IProduct } from "../../interfaces/IProduct";
import utilsService from "../../services/utils.service";

export interface CartState {
	cart: ICart;
}

const initialState: CartState = {
	cart: {
		products: [],
		total: 0,
	},
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<ICartProduct>) => {
			state.cart.products.push(action.payload);
			state.cart.total = utilsService.calculateCartTotal(
				state.cart.products
			);
		},
		removeProduct: (state, action: PayloadAction<ICartProduct>) => {
			state.cart.products.filter((product) => {
				product.productID !== action.payload.productID;
			});
			state.cart.total = utilsService.calculateCartTotal(
				state.cart.products
			);
		},
		setCartData: (state, action: PayloadAction<ICart>) => {
			state.cart = action.payload;
		},
	},
});

export const { addProduct, removeProduct, setCartData } = cartSlice.actions;

export default cartSlice.reducer;
