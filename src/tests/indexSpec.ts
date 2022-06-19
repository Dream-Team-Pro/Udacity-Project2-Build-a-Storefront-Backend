import appRouter from "./routes/index.test";
import errorMiddleware from "../middleware/handleErrors.middleware";
import express from "express";
import config from "../config";
const app = express();
const port = config.port || 3000;

app.use("/", appRouter);


app.use(errorMiddleware);

