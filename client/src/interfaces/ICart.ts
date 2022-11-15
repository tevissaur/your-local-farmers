export interface ICartProduct {
    productID?: string,
    price: number,
    quantity?: {
        amount?: number,
        type?: string
    },
    dateAdded?: string
}


export interface ICart {
    products: Array<ICartProduct>;
    total: number;
}