import * as mongoose from 'mongoose'

export interface Table extends mongoose.Document{
    readonly id: string
    readonly uniq: string
    readonly userId: string
    readonly storeId: string
    readonly title: string
    readonly capacity: number
    readonly available_status: boolean
}