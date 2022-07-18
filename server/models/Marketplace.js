const { Schema, model } = require('mongoose');

const marketplaceSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        address: {
            
        }
    }
)