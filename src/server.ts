import express, { Request, Response } from "express";
import routes from "./routes";
import errorMiddleware from "./middleware/error.middleware";
require('dotenv').config()
const app: express.Application = express();
const port = process.env.PORT;

// Add routes
// app.use(routes);

app.get("/", (req: Request, res: Response) => {
  throw new Error('Error exist');
  res.json({message: "Hello World!"});
});

app.use((_req: Request, res: Response) => {
  res.status(404).json({
    message: 'You are lost'
  })
})
app.use(errorMiddleware);

// app.listen(port, function() {
//   const url = `\x1b[2mhttp://localhost:${port}\x1b[0m`;
//   console.log(`Please open ${url} to review the project ...`);
// });
app.listen(port, ()=> {
  console.log(`Server Started at localhost:${port}`)
});
export default app;
