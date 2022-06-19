import express from "express";
import * as controller from "../../controllers/user.controller";
import {auth} from '../../middleware/auth.middleware';
const router = express.Router();

// Products Router
// router('/', usemiddleware, controllers)
router.get("/", auth, controller.getAllUsers);
router.post("/", auth, controller.addUser);
router.delete("/:id", auth, controller.deleteUser);
router.get("/:id", auth, controller.getUser);
router.put("/", auth, controller.updateUser);
router.post("/login", controller.loginUser);

export default router;