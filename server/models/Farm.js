const { Schema, model } = require('mongoose');

const farmSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
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
    }
)

// farmSchema.pre('save', async function(next) {
//     let total = 0
//     await this.reviews.forEach((review) => {
//         console.log(review.rating)
//         total += review.rating
//     })
//     this.avgScore = total / this.reviews.length
//     console.log(this, this.avgScore)
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

const Farm = model('Farm', farmSchema)

module.exports = Farm