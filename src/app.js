import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import healthCheckRoutes from "./routes/health.route.js";
import userRouter from "./routes/user.route.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

export { app };

// routes declaration

app.use("/api", healthCheckRoutes);

app.use("/api/v1/users", userRouter);
