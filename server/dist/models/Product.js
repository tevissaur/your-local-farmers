"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductQuantityTypeEnum_1 = require("../utils/enums/ProductQuantityTypeEnum");
const productSchema = new mongoose_1.Schema({
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
            enum: ProductQuantityTypeEnum_1.ProductQuantityTypeEnum,
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
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Category",
        },
    ],
    farm: {
        type: mongoose_1.Schema.Types.ObjectId,
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
            type: mongoose_1.Schema.Types.ObjectId,
            default: [],
        },
    ],
}, {
    toJSON: {
        virtuals: true,
    },
});
productSchema.virtual("inSeason").get(function () {
    let month = new Date().getMonth();
    if (month >= this.season.start && month <= this.season.end) {
        return true;
    }
    else {
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
const Product = (0, mongoose_1.model)("Product", productSchema);
exports.default = Product;
