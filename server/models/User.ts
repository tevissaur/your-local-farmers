import { Schema, model, Types } from "mongoose";
import bcrypt from "bcrypt";
import { IReview } from "./Review";
import { IPurchaseOrder } from "./PurchaseOrder";

export interface ILocation {
	address: string;
	latitude: number;
	longitude: number;
}

export interface ICartProduct {
	price: number;
	dateAdded: string;
	quantity: {
		amount: number;
		type: string;
	};
	productID: Types.ObjectId;
	farmID: Types.ObjectId;
	userType: string;
}

export interface IUser {
	username: string;
	firstName: string;
	lastName: string;
	fullName?: string;
	email: string;
	password: string;
	isFarmer: boolean;
	address: string;
	reviews: Types.Array<IReview>;
	orders: Types.Array<IPurchaseOrder>;
	location: Types.ObjectId;
	cart: {
		total: number;
		products: Types.Array<ICartProduct>
	}
}

const userSchema = new Schema<IUser>({
	username: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		match: [/.+@.+\..+/, "Must use a valid email address"],
	},
	password: {
		type: String,
		required: true,
		set: async (plainTextPassword: string) => {
			return await bcrypt.hash(plainTextPassword, 10);
		},
		get: (): undefined => undefined,
	},
	isFarmer: {
		type: Boolean,
		default: false,
	},
	address: {
		type: String,
	},
	reviews: [
		{
			type: Schema.Types.ObjectId,
			ref: "Review",
		},
	],
	orders: [
		{
			type: Schema.Types.ObjectId,
			ref: "PurchaseOrder",
		},
	],
	location: {
		address: {
			type: String,
		},
		latitude: Number,
		longitude: Number,
	},
	cart: {
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
						type: String,
					},
					amount: Number,
				},
				productID: {
					type: Schema.Types.ObjectId,
					ref: "Product",
				},
				farmID: {
					type: Schema.Types.ObjectId,
					ref: 'Farm'
				}
			},
		],
	},
	userType: {
		type: String,
		enum: ["Business", "Personal"],
	},
});

// hash user password
userSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

userSchema.virtual("fullName").get(function () {
	return `${this.firstName} ${this.lastName}`;
});

const User = model<IUser>("User", userSchema);

export default User;
