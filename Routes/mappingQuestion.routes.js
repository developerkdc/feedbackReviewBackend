import express from "express";
import { addMappingQuestions, deleteMappingQuestions, getMappingQuestions } from "../Controller/mappingQuestion.controller.js";
const mappingQuestionRouter = express.Router();

mappingQuestionRouter.route("/")
    .post(addMappingQuestions)

mappingQuestionRouter.route('/:mallId')
    .get(getMappingQuestions)

mappingQuestionRouter.route("/:mallId/:questionId")
    .delete(deleteMappingQuestions)

export default mappingQuestionRouter