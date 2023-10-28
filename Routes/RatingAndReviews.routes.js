import express from "express";
import { addRatingAndReviews, addUser, getRatingAndReviews } from "../Controller/RatingAndReviews.controller.js";
const RatingAndReviewsRouter = express.Router();

RatingAndReviewsRouter.route('/')
    .post(addRatingAndReviews)
    .get(getRatingAndReviews)
    
RatingAndReviewsRouter.route('/addUser/:id')
    .patch(addUser)

export default RatingAndReviewsRouter









































