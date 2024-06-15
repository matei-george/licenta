import path from "path";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js"; // Importing connectDB function from db.js
import userRoutes from "./Routes/userRoute.js";
import categoryRoutes from "./Routes/categoryRoutes.js";

dotenv.config(); // Load environment variables from .env file
const port = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB using the connectDB function

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/category", categoryRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
