import mongoose from "mongoose";
import { config } from "../config";

const mongoUri = config.mongoURI;

export const connectDb = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected:", mongoUri);
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit process with failure
  }
};
