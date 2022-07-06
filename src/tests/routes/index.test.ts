import express from "express";
import userRouter from "./api/user.test.route";
const router = express.Router();

router.use("/users", userRouter);
// router.use("/products", productRouter);
// router.use("/orders", orderRouter);
// router.use("/dailyorder", productsOrdersRouter);
console.log('from index.test\n');
export default router;