import { Schema, model, Types } from 'mongoose';
import { IProduct, ISeason } from './Product';
import { IPurchaseOrder } from './PurchaseOrder';
import { IReview } from './Review';
import { ITag } from './Tags';
import { ILocation, IUser } from './User';

export interface IFarm {
    name: string; 
    address: string;
    reviews: IReview[];
    products: IProduct;
    purchaseOrders: IPurchaseOrder[];
    owners: IUser[];
    story: string;
    avgScore: number;
    offersDelivery: boolean;
    type: string;
    acceptedPayments: string[];
    location: ILocation;
    season: ISeason;
    tags: ITag[];

}


const farmSchema = new Schema<IFarm>(
    {
        name: {
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
        }],
        owners: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
        story: {
            type: String
        },
        avgScore: {
            type: Number
        },
        offersDelivery: {
            type: Boolean,
            default: false
        },
        type: {
            type: String, 
            enum: [
                'CSA',
                'Homestead',
                'On-Farm Market',
                'Agritourism'
            ]
        },
        acceptedPayments: [{
            type: String
        }],
        address: String,
        location: {
            latitude: Number,
            longitude: Number,
        },
        season: {
            start: {
                type: Number,
                default: 1
            },
            end: {
                type: Number,
                default: 12
            }
        },
        tags: [{
            type: Schema.Types.ObjectId,
            default: []
        }]
    }, 
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);

farmSchema.index({ location: "2dsphere" });

// farmSchema.virtual('categoriesOffered', {
//     ref: 'Category',
//     localField: 'name',
//     foreignField: 'name',
//     justOne: true,
// }).get(function() {
//     let arr = [] 
//     this.products.forEach(product => {
//         product.categories.forEach(category => {
//             if (!arr.includes(category)) {
//                 arr.push(category)
//             }
//         })
//         return product.categories
//     })
//     return arr
// })

// farmSchema.post('save', async function(next) {
//     let categories = ["Dairy, Meat & Eggs", "Baked Goods", "Seasonal Stuffs", "Beverages", "Flowers & Plants", "Fruits & Vegetables"]
//     // this.products.forEach((product) => {
//     //     if (categories.includes(product.category.name)) {
//     //         this.categoriesOffered.push(category._id)
//     //     }
//     //     next()
//     // })
//     console.log(this, this.categoriesOffered, 'schema')
// })

// farmSchema.pre('findOneAndUpdate', async function(next) {
//     let total = 0
//     await this.reviews.forEach((review) => {
//         console.log(review.rating)
//         total += review.rating
//     })
//     this.avgScore = total / this.reviews.length
//     console.log(this, this.avgScore)
// })

const Farm = model<IFarm>('Farm', farmSchema)

export default Farm