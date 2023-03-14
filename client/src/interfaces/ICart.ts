import { IFarm } from "./IFarm";
import { IProduct } from "./IProduct";

export interface ICartProduct {
    productId: IProduct;
    name?: string;
    price: number;
    quantity?: {
        amount?: number;
        type?: string
    };
    dateAdded?: string;
    farmId: IFarm;
}


export interface ICart {
    products: Array<ICartProduct>;
    total: number;
}