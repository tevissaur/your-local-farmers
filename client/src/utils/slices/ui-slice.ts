import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFarm } from "../../interfaces/IFarm";
import { IProduct } from "../../interfaces/IProduct";
import { IModal, IReview } from "../../interfaces/IReview";
import { IUser } from "../../interfaces/IUser";

export interface UiState {
	activePage: string;
	profileDropdown: boolean;
	modal: IModal;
	openTab: number;
	review: IReview;
	editUser: IUser;
	editFarm: IFarm;
	editProduct: IProduct;
}

const initialState: UiState = {
	activePage: "",
	profileDropdown: false,
	modal: {
		open: false,
		display: {},
		form: {},
	},
	openTab: 0,
	review: {
		author: "",
		content: "",
		rating: 0,
		farm: "",
		product: "",
	},
	editUser: {
		username: "",
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	},
	editFarm: {
		name: "",
		address: "",
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
	editProduct: {
		name: "",
		image: "",
		price: 0,
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

export const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		toggleProfileDropdown: (state) => {
			state.profileDropdown = !state.profileDropdown;
		},
		toggleModal: (state) => {
			state.modal.open = !state.modal.open;
		},
		setModalDisplay: (state, action: PayloadAction<object>) => {
			state.modal.display = action.payload;
		},
		updateModalFormData: (state, action: PayloadAction<object>) => {
			state.modal.form = action.payload;
		},
		setActivePage: (state, action: PayloadAction<string>) => {
			state.activePage = action.payload;
		},
		setOpenTab: (state, action: PayloadAction<number>) => {
			state.openTab = action.payload;
		},
	},
});

export const {
	toggleModal,
	toggleProfileDropdown,
	setActivePage,
	setModalDisplay,
	updateModalFormData,
} = uiSlice.actions;

export default uiSlice.reducer;
