import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "https://www.rasoihire.tech",
  credentials: true,
}));

app.get("/", (req: Request, res: Response) => {
  res.send("API is working...");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 8001;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect DB", error);
    process.exit(1);
  }
};

startServer();