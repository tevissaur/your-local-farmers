import { Schema, model } from 'mongoose';

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