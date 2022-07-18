const { Schema, model } = require('mongoose');
const { tagsEnum } = require('../utils/enums/TagsEnum');

const tagsSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            enum: tagsEnum
        }
    }
)

const Tags = model('Tags', tagsSchema)

module.exports = Tags