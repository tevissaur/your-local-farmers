const { Schema, model } = require('mongoose');

const tagsSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        }
    }
)

const Tags = model('Tags', tagsSchema)

module.exports = Tags