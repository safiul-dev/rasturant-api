import * as moongose from "mongoose"

export const WaiterSchema = new moongose.Schema({

    uniq: {type: String},
    userId: {type: String},
    name: {type: String},
    phone: {type: String, Null: true},
    email: {type: String, Null: true},
    address: {type: String, Null: true},
    active: {type: Boolean},

})