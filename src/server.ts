import express, { Request, Response } from "express";
import appRouter from "./routes/index";
import bodyParser from "body-parser";
import errorMiddleware from "./middleware/handleErrors.middleware";
import config from "./config";
import db from "./database/index.db";
const app = express();
const port = config.port || 3000;

// // Connecting to a database using Sequelize package 
// const { Sequelize } = require('sequelize');

// // Passing parameters to connect
// const sequelize = new Sequelize(config.database, config.user, config.password, {
//   host: 'localhost',
//   dialect: 'postgres',
//   sync: true, //create the table if it not exists
// });

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

// // Connecting to a database using Sequelize package 
// const { Sequelize } = require('sequelize');

// // Passing parameters to connect
// const sequelize = new Sequelize(config.database, config.user, config.password, {
//   host: 'localhost',
//   dialect: 'postgres'
// });

// // Testing the connection
// const connect = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully with database:', config.database);
//   } catch (error) {
//     console.log('Unable to connect to the database');
//   }
// };
// connect();

// Add routes
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  //throw new Error('Error exist');
  res.json({message: "Hello World in Udacity Project 2 Build a Storefront Backend!"});
});

app.use("/api", appRouter);

app.use(errorMiddleware);

app.listen(port, ()=> {
  console.log(`Server Started at localhost:${port}`)
});
export default app;
