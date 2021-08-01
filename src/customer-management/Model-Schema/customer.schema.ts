import * as mongoose from "mongoose";

export const CustomerSchema = new mongoose.Schema({
    
     uniq: {type: String},
     userId: {type: String},
     name: {type: String},
     phone: {type: String, default: null},
     email: {type: String, default: null},
     address: {type: String, default: null},
     active: {type: Boolean},
})