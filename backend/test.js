import mongoose from "mongoose";
import "dotenv/config";

console.log(process.env.MONGODB_URI);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected!");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });