const { Schema, model, Types } = require('mongoose');

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        reviews: {
            type: [String],
            ref: 'Review'
        },
        inSeason: {
            type: Boolean,
            default: false
        },
        categories: {
            type: [String],
            ref: 'Category'
        }
    }
)

const Product = model('Product', productSchema)

module.exports = Product