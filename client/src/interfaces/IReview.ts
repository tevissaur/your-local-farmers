import { IFarm } from "./IFarm";
import { IProduct } from "./IProduct";
import { ILogin, ISignup, IUser } from "./IUser";

export interface IReview {
    _id?: string;
    author: IUser;
    content: string;
    rating: number;
    farm: string;
    product: string;
}

export interface IModal {
    open: boolean;
}