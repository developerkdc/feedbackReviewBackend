import mongoose from "mongoose";

const RatingAndReviewsSchema = new mongoose.Schema({
  mall: {
    type: {
      mallId: mongoose.Schema.Types.ObjectId,
      name: String,
    },
    required: [true, "mall Id is required"],
  },
  questionAndAnswer: {
    type: [
      {
        questionId: mongoose.Schema.Types.ObjectId,
        question: String,
        typeOf: String,
        answer: [String],
      },
    ],
    default: null,
  },
  user: {
    name: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      default: null,
    },
    contact: {
      type: String,
      default: null,
    },
    city: {
      type: String,
      default: null,
    },
    feedback: {
      type: String,
      default: null,
    },
  },
});

const RatingAndReviewsModel = mongoose.model(
  "RatingAndReviews",
  RatingAndReviewsSchema
);
export default RatingAndReviewsModel;
