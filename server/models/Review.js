const { Schema, model } = require('mongoose')

const reviewSchema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        content: {
            type: String,
            required: true       
        },
        rating: {
            type: Number,
            required: true,
            default: 0
        }
    }
)

const Review = model('Review', reviewSchema)

module.exports = Review