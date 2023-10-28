import mongoose from "mongoose";

const mallSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"mall name is required"]
    }
})

const mallModel = mongoose.model("mall",mallSchema);
export default mallModel;