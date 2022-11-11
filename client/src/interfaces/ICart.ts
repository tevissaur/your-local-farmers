export interface CartProduct {
    _id?: string,
    price?: number,
    quantity?: {
        amount?: number,
        type?: string
    },
    farm?: string,
    dateAdded?: string
}


export interface Cart {
    products: Array<CartProduct>;
    total: number;
}