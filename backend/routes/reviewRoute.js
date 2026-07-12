import express from "express";
import { addReview, getReviews } from "../controllers/reviewController.js";

const reviewRouter = express.Router();

reviewRouter.post("/add", addReview);
reviewRouter.get("/:productId", getReviews);

export default reviewRouter;