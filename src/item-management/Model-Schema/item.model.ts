import { Document } from "mongoose";

export interface Item extends Document{
    
    readonly id: string,
    readonly uniq: string,
    readonly userId: string,
    readonly title: string,
    readonly description: string,
    readonly price: string,
    readonly categoryUniq: string,
    readonly active: boolean
}