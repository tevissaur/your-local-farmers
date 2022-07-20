const { Schema, model } = require('mongoose')
const { ProductQuantityTypeEnum } = require('../utils/enums/ProductQuantityTypeEnum.js')

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        price: {
            type: Number,
            required: true
        },
        // imgUrl: {
        //     type: String
        // },
        quantity: {
            type: {
                type: String,
                enum: ProductQuantityTypeEnum
            },
            amount: {
                type: Number,
                required: true
            }
        },
        // // Remove
        // reviews: [{
        //     type: Schema.Types.ObjectId,
        //     ref: 'Review'
        // }],
        avgScore: {
            type: Number
        },
        categories: [{
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }],
        farm: {
            type: Schema.Types.ObjectId,
            ref: 'Farm'
        },
        description: {
            type: String,
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
        type: {
            type: String,
            enum: [
                'CSA Share',
                'Individual Product'
            ]
        },
        tags: [{
            type: Schema.Types.ObjectId,
            default: []
        }]
    }
)

productSchema.virtual('inSeason').get(function () {
    let date = new Date();
    let month = date.getMonth()
    if ((month >= this.season.start) && (month <= this.season.end)) {
        return true
    } else {
        return false
    }
})

// productSchema.pre('save', async function(next) {
//     let total = 0
//     await this.reviews.forEach((review) => {
//         console.log(review.rating)
//         total += review.rating
//     })
//     this.avgScore = total / this.reviews.length
//     console.log(this, this.avgScore)
// })

// productSchema.pre('findOneAndUpdate', async function(next) {
//     let avg = 0
//     await this.reviews.forEach((review) => {
//         console.log(review.rating)
//         avg += review.rating
//     })
//     this.avgScore = avg
//     console.log(this, this.avgScore)
// })

// productSchema.methods.getAvgReviewScore = async function(reviews) {
//     let avg = 0
//     this.reviews.forEach((review) => {
//         console.log(review.rating)
//         avg += review.rating
//     })
//     this.avgScore = avg
//     return avg
// }

const Product = model('Product', productSchema)

module.exports = Product;