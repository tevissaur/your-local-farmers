"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    author: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    farm: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Farm'
    },
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Product'
    }
});
const Review = (0, mongoose_1.model)('Review', reviewSchema);
exports.default = Review;
