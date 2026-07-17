 import dns from 'dns';
 dns.setServers(["1.1.1.1", "8.8.8.8"]);
// dns.setDefaultResultOrder('ipv4first');

import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from "./config/cloudinary.js";
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import reviewRouter from "./routes/reviewRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const port = process.env.PORT || 5000;
connectDB();
connectCloudinary();

app.use("/api/review", reviewRouter);
app.use("/api/order", orderRouter);

// Middlewares
app.use(express.json());
app.use(cors());

// API Endpoint
app.use('/api/user' ,userRouter);
app.use('/api/product', productRouter);
app.get("/", (req, res) => {
  res.send("API Working");
});

// Start Server
app.listen(port, () => {
  console.log(`Server started on PORT: ${port}`);
});