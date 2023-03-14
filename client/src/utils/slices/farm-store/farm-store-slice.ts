import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFarm } from "../../../interfaces/IFarm";
import { IProduct } from "../../../interfaces/IProduct";

export interface FarmStoreSlice {
	farm: IFarm;
	product: IProduct;
}

const initialState: FarmStoreSlice = {
	farm: {
		_id: "",
		name: "",
		address: "",
		reviews: [],
		products: [],
		owners: [],
		story: "",
		offersDelivery: false,
		tags: [],
		season: {
			start: 0,
			end: 0,
		},
	},
	product: {
		_id: "",
		name: "",
		image: "",
		price: 0,
		avgScore: 0,
		reviews: [],
		description: "",
		season: {
			start: 0,
			end: 0,
		},
		type: "",
		tags: [],
		categories: [],
		quantity: {
			amount: 0,
			type: ''
		}
	}
};

export const farmStoreSlice = createSlice({
	name: "farm-store",
	initialState,
	reducers: {
		setFarmData: ((state, action: PayloadAction<IFarm>) => {
			state.farm = action.payload;
		}),
		setProduct: ((state, action: PayloadAction<IProduct>) => {
			state.product = action.payload;
		}),
		resetFarmData: ((state) => {
			state.farm = initialState.farm;
		}),
	},
});

export const { setFarmData, setProduct, resetFarmData } = farmStoreSlice.actions;

export default farmStoreSlice.reducer;
