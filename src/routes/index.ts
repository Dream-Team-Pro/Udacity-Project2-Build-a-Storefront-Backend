import express from "express";
import productRouter from "./api/product.route";
const router = express.Router();

// routes.use(express.static("public"));
// routes.get("/images", imageHandler);

router.use("/products", productRouter);

export default router;
