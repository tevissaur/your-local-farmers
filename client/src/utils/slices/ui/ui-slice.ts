import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFarm } from "../../../interfaces/IFarm";
import { IProduct } from "../../../interfaces/IProduct";
import { IModal, IReview } from "../../../interfaces/IReview";
import { ILogin, ISignup, IUser } from "../../../interfaces/IUser";

export interface UiState {
	activePage: string;
	returnUrl: string;
	profileDropdown: boolean;
	drawer: IModal;
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
	drawer: {
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
		author: {
			username: "",
			firstName: "",
			lastName: "",
			email: "",
		},
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
		quantity: {
			amount: 0,
			type: ''
		}
	}
};

export const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		toggleProfileDropdown: ((state) => {
			state.profileDropdown = !state.profileDropdown;
		}),
		toggleDrawer: ((state, action: PayloadAction<boolean>) => {
			state.drawer.open = action.payload;
		}),
		setActivePage: ((state, action: PayloadAction<string>) => {
			state.activePage = action.payload;
		}),
		setOpenTab: ((state, action: PayloadAction<number>) => {
			state.openTab = action.payload;
		}),
		setLoginForm: ((state, action: PayloadAction<ILogin>) => {
			state.login = action.payload;
		}),
		setSignupForm: ((state, action: PayloadAction<ISignup>) => {
			state.signup = action.payload;
		}),
		setReviewForm: ((state, action: PayloadAction<IReview>) => {
			state.review = action.payload
		})
	},
});

export const {
	toggleDrawer,
	toggleProfileDropdown,
	setActivePage,
	setOpenTab,
	setLoginForm,
	setSignupForm,
	setReviewForm
} = uiSlice.actions;

export default uiSlice.reducer;
