import express from "express";
import * as controller from "../../controllers/product.controller";
import {auth} from '../../middleware/auth.middleware';
const router = express.Router();

// Products Router
// router('/', usemiddleware, controllers)
router.get("/", auth, controller.getAllProducts);
router.post("/", auth, controller.addProduct);
router.delete("/:id", auth, controller.deleteProduct);
router.patch("/:id", auth, controller.getProduct);
router.put("/", auth, controller.updateProduct);

export default router;