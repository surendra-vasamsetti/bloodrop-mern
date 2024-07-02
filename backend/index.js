import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRegisterRoute from "./routes/user-route.js";
import cors from "cors";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes, adjust origin in production
app.use("/user", userRegisterRoute);

app.listen(4000, () => {
  console.log("server running at port 4000");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB CONNECTED SUCCESSFULLY...");
  })
  .catch((error) => {
    console.log(error);
  });
