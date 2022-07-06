"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrder = exports.getOrder = exports.deleteOrder = exports.addOrder = exports.getAllOrders = void 0;
const order_model_1 = __importDefault(require("../models/order.model"));
const orderModel = new order_model_1.default();
// export getAllorders operation
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield orderModel.getAllOrders();
        res.send({
            message: "This is all orders in table",
            data: Object.assign({}, orders)
        });
    }
    catch (error) {
        throw new Error('hello from getAll error');
    }
});
exports.getAllOrders = getAllOrders;
// export addorder operation
const addOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addorder = yield orderModel.addOrder(req.body);
        res.send({
            message: "This is all add order in table",
            data: Object.assign({}, addorder)
        });
    }
    catch (error) {
        throw new Error('hello from post error');
    }
});
exports.addOrder = addOrder;
// export deleteorder operation
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteorder = yield orderModel.deleteOrder(parseInt(req.params.id));
        res.send({
            message: "This is delete order from table",
            data: Object.assign({}, deleteorder)
        });
    }
    catch (error) {
        throw new Error('hello from delete error');
    }
});
exports.deleteOrder = deleteOrder;
// export getorder operation
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getorder = yield orderModel.getOrder(parseInt(req.params.id));
        res.send({
            message: "This is get a order from table",
            data: Object.assign({}, getorder)
        });
    }
    catch (error) {
        throw new Error('hello from delete error');
    }
});
exports.getOrder = getOrder;
// export updateorder operation
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateorder = yield orderModel.updateOrder(Number(req.body.id), Number(req.body.quantity), Number(req.body.user_id), req.body.status);
        res.send({
            message: "This is update order in table",
            data: Object.assign({}, updateorder)
        });
    }
    catch (error) {
        throw new Error('hello from update error');
    }
});
exports.updateOrder = updateOrder;
