const { Schema, model } = require('mongoose');

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        imgUrl: {
            type: String
        },
        quantity: {
            type: Number,
            required: true
        },
        reviews: [{
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }],
        avgScore: {
            type: Number
        },
        inSeason: {
            type: Boolean,
            default: false
        },
        categories: [{
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }],
        farm: {
            type: Schema.Types.ObjectId,
            ref: 'Farm'
        }
    }
)

productSchema.post('save', async function(next) {
    let total = 0
    await this.reviews.forEach((review) => {
        console.log(review.rating)
        total += review.rating
    })
    this.avgScore = total / this.reviews.length
    console.log(this, this.avgScore)
})

productSchema.pre('findOneAndUpdate', async function(next) {
    let avg = 0
    await this.reviews.forEach((review) => {
        console.log(review.rating)
        avg += review.rating
    })
    this.avgScore = avg
    console.log(this, this.avgScore)
})

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

module.exports = Product