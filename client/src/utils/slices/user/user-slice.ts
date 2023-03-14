import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../interfaces/IUser";
import authenticationService from "../../../services/authentication.service";
import {
	FulfilledAction,
	isPendingAction,
	RejectedAction,
} from "../cart/cart-slice";

export interface UserSlice {
	loggedIn: boolean;
	userData: IUser;
}

const initialState: UserSlice = {
	loggedIn: authenticationService.loggedIn(),
	userData: {
		_id: "",
		firstName: "",
		lastName: "",
		username: "",
		address: "",
		email: "",
		isFarmer: false,
		orders: [],
		reviews: [],
		location: {
			latitude: 42.0,
			longitude: -83.0,
		},
	},
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserData: (state, action: PayloadAction<IUser>) => {
			state.userData = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(setUserData, () => initialState)
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

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
