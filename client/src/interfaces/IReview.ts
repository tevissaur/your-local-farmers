import { IFarm } from "./IFarm";
import { IProduct } from "./IProduct";
import { ILogin, ISignup, IUser } from "./IUser";

export interface IReview {
    author?: string;
    content?: string;
    rating?: number;
    farm?: string;
    product?: string;
}

export interface IModal {
    open: boolean;
    display?: IReview | IFarm | IProduct | ILogin | ISignup | IUser;
    form?: IReview | IFarm | IProduct | ILogin | ISignup | IUser;
}