import express from "express";
import userRouter from "./api/user.route";
import productRouter from "./api/product.route";
import orderRouter from "./api/order.route";
const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/orders", orderRouter);

export default router;
