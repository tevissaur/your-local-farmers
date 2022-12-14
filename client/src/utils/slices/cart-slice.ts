import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, ICartProduct } from "../../interfaces/ICart";
import { IProduct } from "../../interfaces/IProduct";
import utilsService from "../../services/utils.service";

export interface CartState {
    products: Array<ICartProduct>;
    total: number;
}

const initialState: CartState = {
	products: [],
	total: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<ICartProduct>) => {
			state.products.push(action.payload);
			state.total = utilsService.calculateCartTotal(
				state.products
			);
		},
		removeProduct: (state, action: PayloadAction<ICartProduct>) => {
			state.products.filter((product) => product.productID !== action.payload.productID);
			state.total = utilsService.calculateCartTotal(
				state.products
			);
		},
		setCartData: (state, action: PayloadAction<ICart>) => {
			state = action.payload;
		},
	},
});

export const { addProduct, removeProduct, setCartData } = cartSlice.actions;

export default cartSlice.reducer;
