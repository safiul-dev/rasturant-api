import * as mongoose from "mongoose";

export const ItemSchema = new mongoose.Schema({

    uniq: {type: String, require: true},
    userId: {type: String, require: true},
    title: {type: String, require: true},
    description: {type: String, default:null},
    price: {type: String, default: 0},
    categoryUniq: {type: String, default: null},
    active: {type: Boolean, default: true},
})