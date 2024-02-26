import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import RatingAndReviewsRouter from "./Routes/RatingAndReviews.routes.js";
import questionsForProductRouter from "./Routes/questionsForProduct.route.js";
import mallRouter from "./Routes/mall.route.js";
import mappingQuestionRouter from "./Routes/mappingQuestion.routes.js";
import cors from "cors";
dotenv.config();
const app = express();
const port = process.env.PORT || 8001;

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("Database is connected"))
  .catch(() => console.log("Database is disconnected"));

  var corsOptions = {
    // origin: ["http://localhost:3001","https://feedback.kdcstaging.in"],
    origin: ["*"],
    optionsSuccessStatus: 200,
    credentials: true,
  }

app.use(cors(corsOptions));
app.use(express.json());

app.use("/RatingAndReviews", RatingAndReviewsRouter);
app.use("/questions", questionsForProductRouter);
app.use("/mall", mallRouter);
app.use("/mappingQuestion", mappingQuestionRouter);

app.listen(port, () => {
  console.log(`app is listening at ${port}`);
});
