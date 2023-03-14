import { Schema, model, Types, Decimal128 } from "mongoose";
import bcrypt from "bcrypt";
import { IReview } from "./Review";
import { IPurchaseOrder } from "./PurchaseOrder";
import { Cart } from "../__generated__/resolvers-types";
import { IProduct } from "./Product";
import { IFarm } from "./Farm";

export interface ICartProduct {
	price: number;
	dateAdded: string;
	quantity: {
		amount: number;
		type: string;
	};
	productId: IProduct;
	farmId: IFarm;
	userType: string;
}

const cartSchema = new Schema<Cart>({
	total: {
		type: Number,
	},
	products: [
		{
			price: {
				type: Number,
			},
			dateAdded: {
				type: Date,
				default: new Date().toUTCString(),
			},
			quantity: {
				type: {
					type: String
				},
				amount: Number,
			},
			productId: {
				type: Schema.Types.ObjectId,
				ref: "Product",
			},
			farmId: {
				type: Schema.Types.ObjectId,
				ref: "Farm",
			},
		},
	],
	owner: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
});

const Cart = model<Cart>("Cart", cartSchema);

export default Cart;
