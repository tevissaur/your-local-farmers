import { Schema, model, Types } from 'mongoose';
import { IProduct } from './Product';

export interface IOrder {
    items: Types.Array<IProduct>;
    pickUpTime: string,
    deliveryTime: string;
    dateCreated: string;
    buyer: Types.ObjectId;
    seller: Types.ObjectId;
    orderTotal: number;
}

export interface IPurchaseOrder {
    orders: Types.Array<IOrder>;
    orderTotal: number;
}

const purchaseOrderSchema = new Schema<IPurchaseOrder>(
    {
        orders: [{
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
                ref: 'User'
            },
            seller: {
                type: Schema.Types.ObjectId,
                ref: 'Farm'
            },
            orderTotal: {
                type: Schema.Types.Decimal128,
                required: true,
                default: 0
            }
        }],
        orderTotal: {
            type: Schema.Types.Decimal128,
            required: true,
            default: 0
        }
    }
)


const PurchaseOrder = model<IPurchaseOrder>('PurchaseOrder', purchaseOrderSchema)

export default PurchaseOrder