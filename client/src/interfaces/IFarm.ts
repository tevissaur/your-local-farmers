import { IProduct, ISeason } from "./IProduct";
import { IReview } from "./IReview";
import { IUser } from "./IUser";

export interface IPurchaseOrder {
	dateCreated: string;
	orderTotal: string;
	items: Array<IProduct>;
	seller: IFarm;
}

export interface ITag {
    title: string;
}
export interface IFarm {
	_id?: string;
	name?: string;
	address?: string;
	owners?: Array<IUser>;
	offersDelivery?: boolean;
	reviews?: Array<IReview>;
	products?: Array<IProduct>;
	purchaseOrders?: Array<IPurchaseOrder>;

	story?: string;
	avgScore?: number;

	type?: string;
	acceptedPayments?: Array<string>;
	location?: {
		latitude: number;
		longitude: number;
	};
	season?: ISeason;
	tags?: Array<ITag>;
}
