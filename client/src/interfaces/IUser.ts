import { IFarm } from "./IFarm";

export interface IUser {
    username?: string;
    firstName?: string;
    lastName?: string;
    isFarmer?: boolean;
    farms?: Array<IFarm>;
    fullName?: string;
}