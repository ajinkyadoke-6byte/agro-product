// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);

//     console.log("MongoDB Connected");
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// export default connectDB;

// import { MongoClient } from 'mongodb';

// const client = new MongoClient("mongodb+srv://agriweb:Yondu@cluster0.0mre5le.mongodb.net/?appName=Cluster0");

// export async function connectToMongoDB() {
//   try {
//     await client.connect();
//     console.log("You successfully connected to MongoDB!");
//     return client;
//   } catch (err) {
//     console.dir(err);
//   }
// }

// // Call this only when your application terminates
// export async function disconnectFromMongoDB() {
//   await client.close();
// }

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;