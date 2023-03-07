import { ICart } from "./ICart";
import { IFarm, IPurchaseOrder } from "./IFarm";
import { IReview } from "./IReview";

export interface ILocation {
	latitude: number;
	longitude: number;
}
export interface IAuthToken {
	data: {
		_id: string;
		exp: number;
	}
}

export interface IUser {
	_id?: string;
	username: string;
	firstName: string;
	lastName: string;
	isFarmer?: boolean;
	farms?: Array<IFarm>;
	fullName?: string;
	email: string;
	password?: string;
	address?: string;
	orders?: Array<IPurchaseOrder>;
	cart?: ICart;
	reviews?: Array<IReview>;
	location?: ILocation;
}

export interface ILogin {
	username?: string;
	password?: string;
	email?: string;
}
export interface ISignup {
	firstName?: string;
	lastName?: string;
	email?: string;
	username?: string;
	password?: string;
}
