import express from "express";
import { placeOrder, userOrders, allOrders, updateStatus, cancelOrder, requestRefund } from "../controllers/orderController.js";
import authUser from "../middleware/authUser.js";
import adminAuth from "../middleware/adminAuth.js";

const orderRouter = express.Router();

orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/userorders", authUser, userOrders);
orderRouter.post("/cancel", authUser, cancelOrder);
orderRouter.post("/refund-request", authUser, requestRefund);

export default orderRouter;