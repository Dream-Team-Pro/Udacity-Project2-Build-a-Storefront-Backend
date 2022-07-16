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
exports.updateProOrder = exports.getProOrder = exports.deleteProOrder = exports.addProOrder = exports.getAllProOrders = void 0;
const products_orders_model_1 = __importDefault(require("../models/products_orders.model"));
const orderModel = new products_orders_model_1.default();
// export getAllorders operation
const getAllProOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield orderModel.getAllProOrders();
        res.send({
            message: "This is all products_orders in table",
            data: Object.assign({}, orders)
        });
    }
    catch (error) {
        throw new Error('hello from getAll error');
    }
});
exports.getAllProOrders = getAllProOrders;
// export addorder operation
const addProOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addorder = yield orderModel.addProOrder(req.body);
        res.send({
            message: "This is all add products_orders in table",
            data: Object.assign({}, addorder)
        });
    }
    catch (error) {
        throw new Error('hello from post error');
    }
});
exports.addProOrder = addProOrder;
// export deleteorder operation
const deleteProOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteorder = yield orderModel.deleteProOrder(parseInt(req.params.id));
        res.send({
            message: "This is delete products_orders from table",
            data: Object.assign({}, deleteorder)
        });
    }
    catch (error) {
        throw new Error('hello from delete error');
    }
});
exports.deleteProOrder = deleteProOrder;
// export getorder operation
const getProOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getorder = yield orderModel.getProOrder(parseInt(req.params.id));
        res.send({
            message: "This is get a product_order from table",
            data: Object.assign({}, getorder)
        });
    }
    catch (error) {
        throw new Error('hello from delete error');
    }
});
exports.getProOrder = getProOrder;
// export updateorder operation
const updateProOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateorder = yield orderModel.updateProOrder(Number(req.body.id), Number(req.body.price), Number(req.body.quantity), Number(req.body.product_id), Number(req.body.order_id));
        res.send({
            message: "This is update product_order in table",
            data: Object.assign({}, updateorder)
        });
    }
    catch (error) {
        throw new Error('hello from update error');
    }
});
exports.updateProOrder = updateProOrder;
