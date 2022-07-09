const { Schema, model } = require('mongoose')

const locationSchema = new Schema(
    {   
        isUserLocation: {
            type: Boolean,
            default: false
        },
        isFarmLocation: {
            type: Boolean,
            default: false
        },
        latitude: {
            type: Number,
            default: 0
        },
        longitude: {
            type: Number,
            default: 0
        }
    }
)

const Location = model('Location', locationSchema)

module.exports = Location