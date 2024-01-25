import mongoose from "mongoose";
const questionsForProductSchema = new mongoose.Schema({
    question: { type: String },
    typeOf: {
        type: String,
        enum: {
            values: ["multiLine", "multipleChoice", "singleChoice", "stars"],
            message: 'Should be any one of multiLine, multipleChoice, or singleChoice'
        }
    },
    options: {
        type: [{ type: String }],
        default: null
    }
});

const questionsForProductModel = mongoose.model("questionsForProduct", questionsForProductSchema)

export default questionsForProductModel;