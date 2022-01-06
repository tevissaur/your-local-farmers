const { Schema, model, Types } = require('mongoose');

const PurchaseOrderSchema = new Schema(
    {
        items: {
            type: [Types.ObjectId],
            ref: 'Product'
        },
        pickUpTime: {
            type: String,
            required: true
        }
    }
)