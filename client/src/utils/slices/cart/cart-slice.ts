import {
	AnyAction,
	AsyncThunk,
	createAsyncThunk,
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit";
import { ICart, ICartProduct } from "../../../interfaces/ICart";
import { IProduct } from "../../../interfaces/IProduct";
import utilsService from "../../../services/utils.service";
import { cartApi } from "./cart-api";

export type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

export type PendingAction = ReturnType<GenericAsyncThunk["pending"]>;
export type RejectedAction = ReturnType<GenericAsyncThunk["rejected"]>;
export type FulfilledAction = ReturnType<GenericAsyncThunk["fulfilled"]>;

export const isPendingAction = (action: AnyAction): action is PendingAction => {
	return action.type.endsWith("/pending");
};

export interface CartState {
	products: Array<ICartProduct>;
	total: number;
}

const initialState = {
	products: [],
	total: 0,
} as CartState;

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<ICartProduct>) => {
			state.products.push(action.payload);
			state.total = utilsService.calculateCartTotal(state.products);
		},
		removeProduct: (state, action: PayloadAction<ICartProduct>) => {
			state.products.filter(
				(product) => product.productId !== action.payload.productId
			);
			state.total = utilsService.calculateCartTotal(state.products);
		},
		setCartData: (state, action: PayloadAction<ICart>) => {
			state.products = action.payload.products;
			state.total = action.payload.total;
		},
		updateQuantityToAdd: (state, action: PayloadAction<any>) => {
			const updatedProducts = state.products.map((product) => {
				if (product.productId === action.payload.productId) {
					return {
						...product,
						quantity: {
							amount: action.payload.quantity,
						},
					};
				} else return product;
			});
			state.products = updatedProducts;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(setCartData, () => initialState)
			.addMatcher(isPendingAction, (state, action) => {
				state[action.meta.requestId] = "pending";
			})
			.addMatcher(
				(action): action is RejectedAction =>
					action.type.endsWith("/rejected"),
				(state, action) => {
					state[action.meta.requestId] = "rejected";
				}
			)
			.addMatcher(
				(action): action is FulfilledAction =>
					action.type.endsWith("/fulfilled"),
				(state, action) => {
					state[action.meta.requestId] = "fulfilled";
				}
			);
	},
});

export const { addProduct, removeProduct, setCartData, updateQuantityToAdd } =
	cartSlice.actions;

export default cartSlice.reducer;
