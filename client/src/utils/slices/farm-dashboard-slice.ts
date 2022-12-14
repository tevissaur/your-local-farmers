import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { number, string } from "yargs";
import { IFarm } from "../../interfaces/IFarm";
import { IProduct } from "../../interfaces/IProduct";

export interface FarmDashboardSlice {
	farm: IFarm;
	product: IProduct;
}

const initialState: FarmDashboardSlice = {
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
		acceptedPayments: [],
		location: {
			longitude: 0,
			latitude: 0,
		},
		avgScore: 0,
		purchaseOrders: [],
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
	},
};

export const farmDashboardSlice = createSlice({
	name: "farm-dashboard",
	initialState,
	reducers: {
		setFarmData: ((state, action: PayloadAction<IFarm>) => {
			state.farm = action.payload;
		}),
		setProductData: ((state, action: PayloadAction<IProduct>) => {
			state.farm = action.payload;
		}),
	},
});

export const { setFarmData } = farmDashboardSlice.actions;

export default farmDashboardSlice.reducer;
