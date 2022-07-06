"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
console.log('oder test');
// orders Router
// router('/', usemiddleware, controllers)
// router.get("/", auth, controller.getAllOrders);
// router.post("/", auth, controller.addOrder);
// router.delete("/:id", auth, controller.deleteOrder);
// router.get("/:id", auth, controller.getOrder);
// router.put("/", auth, controller.updateOrder);
exports.default = router;
