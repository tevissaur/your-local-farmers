const { Schema, model, Types } = require('mongoose');

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
        reviews: {
            type: [Types.ObjectId],
            ref: 'Review'
        },
        products: {
            type: [Types.ObjectId],
            ref: 'Products'
        },
        purchaseOrders: {
            type: [Types.ObjectId],
            ref: 'PurchaseOrder'
        }
    }
)

const Farm = model('Farm', farmSchema)

module.exports = Farm