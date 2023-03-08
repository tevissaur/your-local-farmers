export interface ICartProduct {
    productID: string;
    name?: string;
    price: number;
    quantity?: {
        amount?: number;
        type?: string
    };
    dateAdded?: string;
    farmID: string;
}


export interface ICart {
    products: Array<ICartProduct>;
    total: number;
}