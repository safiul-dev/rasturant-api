import { Document } from "mongoose";

export interface Customer extends Document{
    readonly id: string
    readonly customer_name: string
    readonly customer_phone: string
    readonly address: string;
}