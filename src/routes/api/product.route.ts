import express from "express";
import * as controller from "../../controllers/product.controller";

const router = express.Router();

// configure routing model
// Products Router
// router('/', usemiddleware, controllers)
router.get("/", controller.getAll);

router.post("/", controller.addProduct);

router.delete("/:id", controller.deleteProduct);


export default router;