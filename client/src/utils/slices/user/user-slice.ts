import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../interfaces/IUser";
import authenticationService from "../../../services/authentication.service";

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
			latitude: 42.00,
			longitude: -83.00,
		},
	},
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserData: ((state, action: PayloadAction<IUser>) => {
			state.userData = action.payload;
		}),
	},
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
