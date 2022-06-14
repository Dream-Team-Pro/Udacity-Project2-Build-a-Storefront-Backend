import express, { Request, Response } from "express";
import appRouter from "./routes/index";
import bodyParser from "body-parser";
import errorMiddleware from "./middleware/handleErrors.middleware";
import config from "./config";
import db from "./database/index.db";
const app = express();
const port = config.port || 3000;

// connection to DB
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
// app.use(routes);
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  //throw new Error('Error exist');
  res.json({message: "Hello World!"});
});


app.use("/api", appRouter);

app.use(errorMiddleware);

// app.use((_req: Request, res: Response) => {
//   res.status(404).json({
//     message: 'You are lost'
//   })
// })

// app.listen(port, function() {
//   const url = `\x1b[2mhttp://localhost:${port}\x1b[0m`;
//   console.log(`Please open ${url} to review the project ...`);
// });
app.listen(port, ()=> {
  console.log(`Server Started at localhost:${port}`)
});
export default app;
