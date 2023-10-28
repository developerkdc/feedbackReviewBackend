import express from "express";
import { addMall, deleteMall, getMall, updateMall } from "../Controller/mall.controller.js";
const mallRouter = express.Router();

mallRouter.route('/')
    .get(getMall)
    .post(addMall)

mallRouter.route('/:id')
    .patch(updateMall)
    .delete(deleteMall)

export default mallRouter;