import mongoose from "mongoose";

const  adminSchema = new mongoose.Schema({
    uname: {type:String},
    password : {type : String},
    promotedRestaurants : [{type : String}]
})

export default mongoose.model("Admin",adminSchema);