import * as mongoose from "mongoose";

export const CustomerSchema = new mongoose.Schema({
    
     customer_name: {type: String},
     customer_phone: {type: String},
     address: {type: String}
})