import mongoose from "mongoose";

const mappingQuestionSchema = new mongoose.Schema({
    mallId:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"mallId is required"]
    },
    questionId:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"questionId is required"]
    }
})

const mappingQuestionModel = mongoose.model("mappingQuestion",mappingQuestionSchema);
export default mappingQuestionModel;