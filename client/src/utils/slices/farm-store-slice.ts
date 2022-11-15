import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../../interfaces/ICategory";
import { IFarm } from "../../interfaces/IFarm";
import { IProduct } from "../../interfaces/IProduct";

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
	}
};

export const farmStoreSlice = createSlice({
	name: "farm-store",
	initialState,
	reducers: {
		setFarmData: (state, action: PayloadAction<IFarm>) => {
			state.farm = action.payload;
		},
		setProduct: (state, action: PayloadAction<IProduct>) => {
			state.farm = action.payload;
		},
	},
});

export const { setFarmData, setProduct } = farmStoreSlice.actions;

export default farmStoreSlice.reducer;
