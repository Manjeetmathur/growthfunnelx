import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

app.use(cors({
       origin: ['http://localhost:5173', 'https://growthfunnelx.vercel.app'],
       credentials: true
}));
app.use(express.json());

app.use("/api", contactRoutes);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
       console.log(`Server running on port ${PORT}`);
});
