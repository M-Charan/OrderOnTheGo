import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{type : String},
    password:{type : String},
    email:{type : String},
    userType:{type : String},
});

export default mongoose.model("Users",userSchema);