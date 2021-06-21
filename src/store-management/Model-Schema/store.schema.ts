import * as mongoose from 'mongoose'
export const StoreSchema = new mongoose.Schema({

     uniq: {type: String},
     userId: {type: mongoose.SchemaTypes.ObjectId},
     title: {type: String},
     active: {type: Boolean},
})