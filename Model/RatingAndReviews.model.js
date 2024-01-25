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
  created_at: { type: Date, default: Date.now() },
});

// const RatingAndReviewsSchema = new mongoose.Schema({
//   mall: {
//     type: {
//       mallId: mongoose.Schema.Types.ObjectId,
//       name: String,
//     },
//     required: [true, "mall Id is required"],
//   },
//   question_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "questionsForProductModel",
//     required: [true, "question Id is required"],
//   },
//   answer: {
//     type: [{ type: String }],
//   },
//   user: {
//     device_id: {
//       type: String,
//       default: null,
//     },
//     name: {
//       type: String,
//       default: null,
//     },
//     email: {
//       type: String,
//       default: null,
//     },
//     contact: {
//       type: String,
//       default: null,
//     },
//     city: {
//       type: String,
//       default: null,
//     },
//     feedback: {
//       type: String,
//       default: null,
//     },
//   },
//   created_at:{
//     type: Date,
//     default: Date.now()
//   }
// });

const RatingAndReviewsModel = mongoose.model(
  "ratingandreviews",
  RatingAndReviewsSchema
);
export default RatingAndReviewsModel;
