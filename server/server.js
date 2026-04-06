import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("your_mongodb_url")
.then(() => console.log("DB connected"));

app.listen(5000, () => console.log("Server running"));