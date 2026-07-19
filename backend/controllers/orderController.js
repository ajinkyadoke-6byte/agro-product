import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Place a new order — Cash on Delivery
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now(),
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        // Clear the user's cart after a successful order
        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        res.json({ success: true, message: "Order Placed", order: newOrder });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};
// Update order status — admin only
const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;

        const order = await orderModel.findById(orderId);

        if (!order) {
            return res.json({ success: false, message: "Order not found" });
        }

        const updateFields = { status };

        // Mark COD orders as paid once they're actually delivered
        if (status === "Delivered" && order.paymentMethod === "COD" && !order.payment) {
            updateFields.payment = true;
        }

        const updatedOrder = await orderModel.findByIdAndUpdate(orderId, updateFields, { new: true });

        res.json({ success: true, message: "Status Updated", order: updatedOrder });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};
// Get all orders for the logged-in user
const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await orderModel.find({ userId }).sort({ date: -1 });

        res.json({ success: true, orders });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Get all orders — admin only
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({}).sort({ date: -1 });
        res.json({ success: true, orders });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};
// Cancel an order — only the order's owner, only while still "Order Placed"
const cancelOrder = async (req, res) => {
    try {
        const { userId, orderId } = req.body;

        const order = await orderModel.findById(orderId);

        if (!order) {
            return res.json({ success: false, message: "Order not found" });
        }

        if (order.userId !== userId) {
            return res.json({ success: false, message: "Not authorized to cancel this order" });
        }

        if (order.status !== "Order Placed") {
            return res.json({ success: false, message: "This order can no longer be cancelled" });
        }

        order.status = "Cancelled";
        await order.save();

        res.json({ success: true, message: "Order Cancelled", order });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Request a refund — only after the order has shipped or been delivered
const requestRefund = async (req, res) => {
    try {
        const { userId, orderId, reason } = req.body;

        const order = await orderModel.findById(orderId);

        if (!order) {
            return res.json({ success: false, message: "Order not found" });
        }

        if (order.userId !== userId) {
            return res.json({ success: false, message: "Not authorized for this order" });
        }

        if (!["Shipped", "Delivered"].includes(order.status)) {
            return res.json({ success: false, message: "Refunds can only be requested after an order has shipped" });
        }

        order.status = "Refund Requested";
        order.refundReason = reason || "";
        await order.save();

        res.json({ success: true, message: "Refund Requested", order });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};
// Update order status — admin only
// const updateStatus = async (req, res) => {
//     try {
//         const { orderId, status } = req.body;
//         await orderModel.findByIdAndUpdate(orderId, { status });

//         res.json({ success: true, message: "Status Updated" });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

export { placeOrder, userOrders, allOrders, updateStatus, cancelOrder, requestRefund };