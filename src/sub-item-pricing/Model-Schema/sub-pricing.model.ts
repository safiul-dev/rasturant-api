import { Document } from "mongoose";

export interface SubPricing extends Document{

    readonly id: string
    readonly uniq: string
    readonly title: string
    readonly description: string
    readonly ratio: string
    readonly price: string
    readonly itemUniq: string
}