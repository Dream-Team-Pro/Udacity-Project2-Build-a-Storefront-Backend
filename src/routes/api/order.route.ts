import express from "express";
import * as controller from "../../controllers/order.controller";
// import {auth} from '../../middleware/auth.middleware';
import {auth} from '../../middleware/auth.middleware';
const router = express.Router();

// orders Router
// router('/', usemiddleware, controllers)
router.get("/", auth, controller.getAllOrders);
router.post("/", auth, controller.addOrder);
router.delete("/:id", auth, controller.deleteOrder);
router.get("/:id", auth, controller.getOrder);
router.put("/", auth, controller.updateOrder);

export default router;