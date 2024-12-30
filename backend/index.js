import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"

import { connectDB } from "./db/connectDB.js";

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world 123!")
})

app.use("/api/auth", authRoutes)

app.listen(3000, () => {
    connectDB();
    console.log("Server started at 3000")
})