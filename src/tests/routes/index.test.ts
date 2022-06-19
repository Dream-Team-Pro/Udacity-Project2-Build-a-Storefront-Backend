import express from "express";
import userRouter from "./api/user.test.route";
// import productRouter from "./api/product.test.route";
// import orderRouter from "./api/order.test.route";
const router = express.Router();

// routes.use(express.static("public"));
// routes.get("/images", imageHandler);

router.use("/users", userRouter);
// router.use("/products", productRouter);
// router.use("/orders", orderRouter);

export default router;
