import { Schema, model } from 'mongoose'

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

const Message = model('Message', messageSchema)

export default Message