import * as mongoose from 'mongoose'
export const TableSchema = new mongoose.Schema({

     uniq: {type: String},
     userId: {type: mongoose.SchemaTypes.ObjectId},
     storeId: {type: mongoose.SchemaTypes.ObjectId},
     title: {type: String},
     capacity: {type: Number},
     available_status: {type: Boolean},
})