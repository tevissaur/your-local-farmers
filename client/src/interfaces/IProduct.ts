import { ICategory } from "./ICategory";
import { IFarm, ITag } from "./IFarm";
import { IReview } from "./IReview";

export interface ISeason {
    start: number;
    end: number;
}

export interface IProduct {
    _id?: string;
	name: string;
	image?: string;
	price?: number;
	avgScore?: number;
	reviews?: Array<IReview>;
    description?: string;
    season?: ISeason;
    type?: string;
    tags?: Array<ITag>;
    categories?: Array<ICategory>
    quantity?: {
        type: string;
        amount: number;
    };
    farm?: IFarm;
}
