import { IProduct } from "./IProduct";
import { IReview } from "./IReview";
import { IUser } from "./IUser";

export interface IPurchaseOrder {

}

export interface ITag {

}

export interface IFarm {
    name: string;
    address: string;
    reviews?: Array<IReview>;
    products?: Array<IProduct>;
    purchaseOrders?: Array<IPurchaseOrder>;
    owners: Array<IUser>;
    story: string;
    avgScore?: number;
    offersDelivery: boolean;
    type: string;
    acceptedPayments: string;
    location: {
        latitude: number;
        longitude: number;
    };
    season: {
        start: number;
        end: number;
    };
    tags: Array<ITag>;
}