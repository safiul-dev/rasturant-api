import * as mongoose from 'mongoose'
export const StoreSchema = new mongoose.Schema({

     uniq: {type: String},
     userId: {type: String},
     title: {type: String},
     active: {type: Boolean},
})