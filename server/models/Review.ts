import { Schema, model, Types } from 'mongoose'

export interface IReview {
    author: Types.ObjectId;
    content: string;
    rating: number;
    farm: Types.ObjectId;
    product: Types.ObjectId;
}

const reviewSchema = new Schema<IReview>(
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
        },
        farm: {
            type: Schema.Types.ObjectId,
            ref: 'Farm'
        },
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    }
)

const Review = model<IReview>('Review', reviewSchema)

export default Review