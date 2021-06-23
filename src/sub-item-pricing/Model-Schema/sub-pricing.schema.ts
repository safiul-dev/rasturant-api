import * as mongoose from "mongoose";

export const SubPricingSchema = new mongoose.Schema({

    uniq: {type: String, require:true},
    title: {type: String, require:true},
    description: {type: String, default: null},
    ratio: {type: String, default: "1:1"},
    price: {type: String, default: 0},
    itemUniq: {type: String, default: null}
})