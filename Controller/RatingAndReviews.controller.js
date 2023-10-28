import mongoose from "mongoose";
import RatingAndReviewsModel from "../Model/RatingAndReviews.model.js"

export const addRatingAndReviews = async (req,res)=>{
    try {
        const addRNR = await RatingAndReviewsModel.create(req.body);
        res.status(200).json({
            status:"created",
            RatingAndReviews:addRNR
        })
    } catch (error) {
        res.status(500).json({
            status:"failed",
            message:error.message
        })
    }
}
export const addUser = async (req,res)=>{
    try {
        const addRNRUser = await RatingAndReviewsModel.findByIdAndUpdate({_id:req.params.id},{
            $set:{
                "user.name":req.body.name,
                "user.email":req.body.email,
                "user.contact":req.body.contact,
                "user.city":req.body.city,
                "user.feedback":req.body.feedback
            }
        },{new:true});
        res.status(200).json({
            status:"created",
            RatingAndReviews:addRNRUser
        })
    } catch (error) {
        res.status(500).json({
            status:"failed",
            message:error.message
        })
    }
}

export const getRatingAndReviews = async (req,res)=>{
    try {
       let matchType = {
         "mall.mallId": new mongoose.Types.ObjectId(req.query.mallId),
       };
    //    if (req.params.mallId) {
    //      matchType["mall.mallId"] = new mongoose.Types.ObjectId(
    //        req.params.mallId
    //      );
    //    }
       if (req.query.type === "stars") {
         matchType = {...matchType,"questionAndAnswer.typeOf": { $eq: req.query.type } };
       } else if (req.query.type === "all") {
         matchType = {
           "mall.mallId": new mongoose.Types.ObjectId(req.query.mallId),
         };
       } else {
         matchType = {...matchType,"questionAndAnswer.typeOf": { $ne: "stars" } };
       }

        const getRNR = await RatingAndReviewsModel.aggregate([
            {
                $unwind:"$questionAndAnswer"
            },
            {
                $match:matchType
            }
        ]);
        
        res.status(200).json({
            status:"success",
            RatingAndReviews:getRNR
        })
    } catch (error) {
        res.status(500).json({
            status:"failed",
            message:error.message
        })
    }
}