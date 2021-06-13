import * as mongoose from "mongoose";

export const UsersSchema = new mongoose.Schema({
    firstname: {type: String, require:true},
    lastname: {type: String, require:true},
    username: {type: String, require:true},
    mobile: {type: String, require:true},
    password: {type: String, require:true},
   
})