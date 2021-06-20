import { Document } from "mongoose";

export interface Customer extends Document{
    readonly id: string
    readonly uniq: string
    readonly userId: string
    readonly name: string
    readonly email: string
    readonly phone: string
    readonly address: string
    readonly active: boolean
}