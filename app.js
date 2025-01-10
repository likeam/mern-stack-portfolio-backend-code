import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import dbConnection from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import messageRouter from "./routes/messageRoute.js";
import userRouter from "./routes/userRoute.js";
import projectRoute from "./routes/projectRoute.js";
import skillRoute from "./routes/skillRoute.js";
import softwareApplicationRoute from "./routes/softwareApplicationRoute.js";
import timelineRoute from "./routes/timelineRoute.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.PORTFOLIO_URL, process.env.DASHBOARD_URL],
    methods: ["PUT", "POST", "DELETE", "GET"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tem/",
  })
);

app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/projects", projectRoute);
app.use("/api/v1/skill", skillRoute);
app.use("/api/v1/softwateapplication", softwareApplicationRoute);
app.use("/api/v1/timeline", timelineRoute);

dbConnection();
app.use(errorMiddleware);

export default app;
