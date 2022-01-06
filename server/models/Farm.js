const { Schema, model } = require('mongoose');

const farmSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true
        },
        reviews: [{
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }],
        products: [{
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }],
        purchaseOrders: [{
            type: Schema.Types.ObjectId,
            ref: 'PurchaseOrder'
        }]
    }
)

const Farm = model('Farm', farmSchema)

module.exports = Farm