import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import healthCheckRoutes from "./routes/health.route.js";
import signupCheckRoutes from './routes/user.route.js';
import loginCheckRoutes from './routes/user.route.js';

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

export { app };

// routes declaration

app.use('/api', healthCheckRoutes);
app.use('/api', signupCheckRoutes)
app.use('/api', loginCheckRoutes)



