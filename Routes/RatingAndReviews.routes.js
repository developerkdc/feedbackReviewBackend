import express from "express";
import { addRatingAndReviews, addUser, getAllUserForQuestion, getRatingAndReviews } from "../Controller/RatingAndReviews.controller.js";
const RatingAndReviewsRouter = express.Router();

RatingAndReviewsRouter.route('/')
    .post(addRatingAndReviews)
    .get(getRatingAndReviews)
RatingAndReviewsRouter.route('/getUserForQuestion')
    .get(getAllUserForQuestion)
    
RatingAndReviewsRouter.route('/addUser/:id')
    .patch(addUser)

export default RatingAndReviewsRouter









































