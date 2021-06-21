import * as mongoose from "mongoose"

export const WaiterSchema = new mongoose.Schema({

    uniq: {type: String},
    userId: {type: mongoose.SchemaTypes.ObjectId},
    name: {type: String},
    phone: {type: String, Null: true},
    email: {type: String, Null: true},
    address: {type: String, Null: true},
    active: {type: Boolean},

})