import * as mongoose from "mongoose";

export const CategorySchema = new mongoose.Schema({

    uniq: {type: String, require: true},
    userId: {type: mongoose.SchemaTypes.ObjectId, require: true},
    parent: {type: String, default: null},
    title: {type: String, require: true},
    active: {type: Boolean, require: true}
})