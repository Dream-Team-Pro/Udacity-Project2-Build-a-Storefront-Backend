import express from "express";
import appRouter from "./routes/index.test";
import errorMiddleware from "../middleware/handleErrors.middleware";
import bodyParser from "body-parser";
const app = express();

// Add routes
app.use(bodyParser.json());

app.use("/api", appRouter);
console.log('from indexSpec\n');

app.use(errorMiddleware);
