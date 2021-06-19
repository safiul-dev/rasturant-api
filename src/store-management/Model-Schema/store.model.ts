import * as mongoose from 'mongoose'

export interface Store extends mongoose.Document{
    readonly id: string
    readonly uniq: string
    readonly userId: string
    readonly title: string
    readonly active: boolean
}