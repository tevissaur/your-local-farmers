"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const purchaseOrderSchema = new mongoose_1.Schema({
    orders: {
        items: [{
                type: mongoose_1.Schema.Types.ObjectId,
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
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'User'
        },
        seller: {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Farm'
        },
    },
    orderTotal: {
        type: mongoose_1.Schema.Types.Decimal128,
        required: true,
        default: 0
    }
});
const PurchaseOrder = (0, mongoose_1.model)('PurchaseOrder', purchaseOrderSchema);
exports.default = PurchaseOrder;
