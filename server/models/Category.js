const { Schema, model } = require('mongoose')


const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        imgUrl: {
            type: String
        }
    }
)

const Category = model('Category', categorySchema)

module.exports = Category