import { Schema, model, Types } from 'mongoose'

export interface ICategory {
    name: string;
    imgUrl: string;
}

const categorySchema = new Schema<ICategory>(
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


const Category = model<ICategory>('Category', categorySchema)

export default Category