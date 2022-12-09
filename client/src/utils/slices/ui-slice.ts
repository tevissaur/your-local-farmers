import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFarm } from "../../interfaces/IFarm";
import { IProduct } from "../../interfaces/IProduct";
import { IModal, IReview } from "../../interfaces/IReview";
import { ILogin, ISignup, IUser } from "../../interfaces/IUser";

export interface UiState {
	activePage: string;
	returnUrl: string;
	profileDropdown: boolean;
	modal: IModal;
	login: ILogin;
	signup: ISignup;
	openTab: number;
	review: IReview;
	editUser: IUser;
	editFarm: IFarm;
	editProduct: IProduct;
}

const initialState: UiState = {
	activePage: "",
	returnUrl: '',
	profileDropdown: false,
	modal: {
		open: false
	},
	login: {
		username: '',
		password: '',
		email: ''
	},
	signup: {
		username: '',
		password: '',
		email: '',
		firstName: ''
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
		toggleProfileDropdown: ((state) => {
			state.profileDropdown = !state.profileDropdown;
		}),
		toggleModal: ((state) => {
			state.modal.open = !state.modal.open;
		}),
		setActivePage: ((state, action: PayloadAction<string>) => {
			state.activePage = action.payload;
		}),
		setOpenTab: ((state, action: PayloadAction<number>) => {
			state.openTab = action.payload;
		}),
		setLoginForm: ((state, action: PayloadAction<ILogin>) => {
			state.login = { ...action.payload };
		}),
		setSignupForm: ((state, action: PayloadAction<ISignup>) => {
			state.signup = { ...action.payload };
		})
	},
});

export const {
	toggleModal,
	toggleProfileDropdown,
	setActivePage,
	setOpenTab,
	setLoginForm,
	setSignupForm
} = uiSlice.actions;

export default uiSlice.reducer;
