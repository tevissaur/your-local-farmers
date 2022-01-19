const { Schema, model } = require('mongoose')

const messageSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    farm: {
        type: Schema.Types.ObjectId,
        ref: 'Farm'
    },
    message: {
         type: String,
         required: true
    }
})

const Message = new model('Message', messageSchema)

module.exports = Message