"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const farmSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    reviews: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Review'
        }],
    products: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Product'
        }],
    purchaseOrders: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'PurchaseOrder'
        }],
    owners: [{
            type: mongoose_1.Schema.Types.ObjectId,
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
    location: {
        address: String,
        latitude: mongoose_1.Schema.Types.Decimal128,
        longitude: mongoose_1.Schema.Types.Decimal128,
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
            type: mongoose_1.Schema.Types.ObjectId,
            default: []
        }]
}, {
    toJSON: {
        getters: true,
        virtuals: true
    }
});
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
const Farm = (0, mongoose_1.model)('Farm', farmSchema);
exports.default = Farm;
