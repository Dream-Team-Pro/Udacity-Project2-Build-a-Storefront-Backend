import express, { Request, Response } from "express";
import appRouter from "../routes/index";
import bodyParser from "body-parser";
import errorMiddleware from "../middleware/handleErrors.middleware";
import config from "../config";
import db from "../database/index.db";
const port = config.port || 3000;
const app: express.Application = express();

// // connection to DB
db.connect().then((client) => {
  return client
  .query("SELECT NOW()")
  .then((res) => {
    client.release();
    console.log(res.rows);
  })
  .catch((err) => {
    client.release();
    console.log(err.stack);    
  });
});

// Add routes
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  //throw new Error('Error exist');
  res.json({message: "Hello World in Udacity Project 2 Build a Storefront Backend!"});
});

app.use("/api", appRouter);

app.use(errorMiddleware);

module.exports = app;