import express from "express";
import * as controller from "../../controllers/products_orders.controller";
// import {auth} from '../../middleware/auth.middleware';
import {auth} from '../../middleware/auth.middleware';
const router = express.Router();

// orders Router
// router('/', usemiddleware, controllers)
router.get("/", auth, controller.getAllProOrders);
router.post("/", auth, controller.addProOrder);
router.delete("/:id", auth, controller.deleteProOrder);
router.get("/:id", auth, controller.getProOrder);
router.put("/", auth, controller.updateProOrder);

export default router;