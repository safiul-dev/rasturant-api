import { Document } from "mongoose";

export interface Category extends Document{
    
   readonly id: string
   readonly uniq: string
   readonly userId: string
   readonly parent: string
   readonly title: string
   readonly active: boolean
}