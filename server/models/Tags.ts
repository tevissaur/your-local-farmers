import { Schema, model } from 'mongoose';
import { tagsEnum } from '../utils/enums/TagsEnum';

export interface ITag {
    name: string;
}


const tagsSchema = new Schema<ITag>(
    {
        name: {
            type: String,
            required: true,
            enum: tagsEnum
        }
    }
)

const Tags = model<ITag>('Tags', tagsSchema)


export default Tags