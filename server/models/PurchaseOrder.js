const { Schema, model } = require('mongoose');

const purchaseOrderSchema = new Schema(
    {
        items: [{
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }],
        quantity: {
            type: Number
        },
        pickUpTime: {
            type: String,
            required: true
        },
        dateCreated: {
            type: Date,
            default: Date.now()
        },
        buyer: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        seller: {
            type: Schema.Types.ObjectId,
            ref: 'Farm'
        },
        orderTotal: {
            type: Number,
            default: 0
        }
    }
)


const PurchaseOrder = model('PurchaseOrder', purchaseOrderSchema)

module.exports = PurchaseOrder