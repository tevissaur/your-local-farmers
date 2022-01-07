const { Schema, model } = require('mongoose');

const purchaseOrderSchema = new Schema(
    {
        items: [{
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }],
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
            required: true
        },
        seller: {
            type: Schema.Types.ObjectId,
            required: true
        },
        orderTotal: {
            type: Number,
            default: 0
        }
    }
)

const PurchaseOrder = model('PurchaseOrder', purchaseOrderSchema)

module.exports = PurchaseOrder