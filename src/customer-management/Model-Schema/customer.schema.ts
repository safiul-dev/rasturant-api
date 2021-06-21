import * as mongoose from "mongoose";

export const CustomerSchema = new mongoose.Schema({
    
     uniq: {type: String},
     userId: {type: mongoose.SchemaTypes.ObjectId},
     name: {type: String},
     phone: {type: String, null: true},
     email: {type: String, null: true},
     address: {type: String, null: true},
     active: {type: Boolean},
})