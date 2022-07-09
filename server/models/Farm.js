const { Schema, model } = require('mongoose');

const farmSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
            // unique: true
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
        type: [{
            type: 'String', 
            enum: [
                'CSA',
                'Homestead',
                'Farmers Market',
                'Food Hub',
                'On-Farm Market',
                'Agritourism'
            ]
        }],
        acceptedPayments: [{
            type: String
        }],
        location: {
            latitude: Schema.Types.Decimal128,
            longitude: Schema.Types.Decimal128
        },
        season: {
            start: String,
            end: String
        }
    }
)

farmSchema.virtual('categoriesOffered', {
    ref: 'Category',
    localField: 'name',
    foreignField: 'name',
    justOne: true,
}).get(function() {
    let arr = [] 
    this.products.forEach(product => {
        product.categories.forEach(category => {
            if (!arr.includes(category)) {
                arr.push(category)
            }
        })
        return product.categories
    })
    return arr
})

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

const Farm = model('Farm', farmSchema)

module.exports = Farm