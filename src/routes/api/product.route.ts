import express from "express";
import * as controller from "../../controllers/product.controller";

const router = express.Router();

// Products Router
// router('/', usemiddleware, controllers)
router.get("/", controller.getAllProducts);

router.post("/", controller.addProduct);

router.delete("/:id", controller.deleteProduct);

router.patch("/:id", controller.getProduct);

router.put("/", controller.updateProduct);


export default router;