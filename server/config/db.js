import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  await mongoose
    .connect(`${process.env.MONGOOSE_URL}/auth`)
    .then(() => {
      console.log("Connected to mongodb");
    })
    .catch((err) => {
      console.log("Connection not done", err);
    });
};

export default connectDB;