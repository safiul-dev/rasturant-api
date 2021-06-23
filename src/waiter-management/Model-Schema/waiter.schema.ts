import * as mongoose from "mongoose"

export const WaiterSchema = new mongoose.Schema({

    uniq: {type: String},
    userId: {type: mongoose.SchemaTypes.ObjectId},
    name: {type: String},
    phone: {type: String, default: null},
    email: {type: String, default: null},
    address: {type: String, default: null},
    active: {type: Boolean},

})