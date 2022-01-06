const { Schema, model } = require('mongoose');

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
        reviews: [{
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }],
        inSeason: {
            type: Boolean,
            default: false
        },
        categories: [{
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }]
    }
)

const Product = model('Product', productSchema)

module.exports = Product