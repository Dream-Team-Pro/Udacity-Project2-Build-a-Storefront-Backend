"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_test_route_1 = __importDefault(require("./api/user.test.route"));
const router = express_1.default.Router();
router.use("/users", user_test_route_1.default);
// router.use("/products", productRouter);
// router.use("/orders", orderRouter);
// router.use("/dailyorder", productsOrdersRouter);
console.log('from index.test\n');
exports.default = router;
