import { InlineFragmentNode } from "graphql";
import { Schema, model, Types } from "mongoose";
import { ProductQuantityTypeEnum } from "../utils/enums/ProductQuantityTypeEnum";
import { ICategory } from "./Category";

export interface ISeason {
	start: number;
	end: number;
}
export interface IProduct {
	name: string;
	image: string;
	price: number;
	quantity: {
		type: string;
		amount: number;
	};
	avgScore: number;
	categories: Types.Array<Types.ObjectId>;
	farm: Types.ObjectId;
	description: string;
	season: ISeason;
	type: string;
	tags: Types.Array<Types.ObjectId>;
}

const productSchema = new Schema<IProduct>(
	{
		name: {
			type: String,
			required: true,
		},
		image: {
			type: String,
		},
		price: {
			type: Number,
			required: true,
		},
		// imgUrl: {
		//     type: String
		// },
		quantity: {
			type: {
				type: String,
				enum: ProductQuantityTypeEnum,
			},
			amount: {
				type: Number,
				required: true,
			},
		},
		// // Remove
		// reviews: [{
		//     type: Schema.Types.ObjectId,
		//     ref: 'Review'
		// }],
		avgScore: {
			type: Number,
		},
		categories: [
			{
				type: Schema.Types.ObjectId,
				ref: "Category",
			},
		],
		farm: {
			type: Schema.Types.ObjectId,
			ref: "Farm",
		},
		description: {
			type: String,
		},
		season: {
			start: {
				type: Number,
				default: 1,
			},
			end: {
				type: Number,
				default: 12,
			},
		},
		type: {
			type: String,
			enum: ["CSA Share", "Individual Product"],
		},
		tags: [
			{
				type: Schema.Types.ObjectId,
				default: [],
			},
		],
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

productSchema.virtual("inSeason").get(function (this: IProduct) {
	let month = new Date().getMonth();
	if (month >= this.season.start && month <= this.season.end) {
		return true;
	} else {
		return false;
	}
});

// productSchema.pre('save', async function(next) {
//     let total = 0
//     await this.reviews.forEach((review) => {
//         console.log(review.rating)
//         total += review.rating
//     })
//     this.avgScore = total / this.reviews.length
//     console.log(this, this.avgScore)
// })

// productSchema.pre('findOneAndUpdate', async function(next) {
//     let avg = 0
//     await this.reviews.forEach((review) => {
//         console.log(review.rating)
//         avg += review.rating
//     })
//     this.avgScore = avg
//     console.log(this, this.avgScore)
// })

// productSchema.methods.getAvgReviewScore = async function(reviews) {
//     let avg = 0
//     this.reviews.forEach((review) => {
//         console.log(review.rating)
//         avg += review.rating
//     })
//     this.avgScore = avg
//     return avg
// }

const Product = model("Product", productSchema);

export default Product;
