"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./api/user.route"));
const product_route_1 = __importDefault(require("./api/product.route"));
const order_route_1 = __importDefault(require("./api/order.route"));
const products_orders_route_1 = __importDefault(require("./api/products_orders.route"));
const router = express_1.default.Router();
router.use("/users", user_route_1.default);
router.use("/products", product_route_1.default);
router.use("/orders", order_route_1.default);
router.use("/dailyorder", products_orders_route_1.default);
exports.default = router;
