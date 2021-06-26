import * as mongoose from "mongoose";

export const WorkPeriodSchema = new mongoose.Schema({

    userId: {type: mongoose.SchemaTypes.ObjectId, require: true},
    uniq: {type: String, require: true},
    storUniq: {type: String, require: true},
    startedAt: {type: String, require: true},
    endedAt: {type: String, require: true},
    createdAt: {type: String, require: true}
})