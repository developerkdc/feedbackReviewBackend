import express from "express";
import { GetMall, UpdateUser, addMall, deleteMall, getMall, updateMall } from "../Controller/mall.controller.js";
const mallRouter = express.Router();

mallRouter.route("/").get(GetMall).post(addMall);

mallRouter.route("/:id").patch(UpdateUser).delete(deleteMall);

export default mallRouter;
