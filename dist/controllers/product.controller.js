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
exports.updateProduct = exports.getProduct = exports.deleteProduct = exports.addProduct = exports.getAllProducts = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
const productModel = new product_model_1.default();
// export getAllProducts operation
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productModel.getAllProducts();
        res.send({
            message: "This is all products in table",
            data: Object.assign({}, products)
        });
    }
    catch (error) {
        throw new Error('hello from getAll error');
    }
});
exports.getAllProducts = getAllProducts;
// export addProduct operation
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addProduct = yield productModel.addProduct(req.body);
        res.send({
            message: "This is all add product in table",
            data: Object.assign({}, addProduct)
        });
    }
    catch (error) {
        throw new Error('hello from post error');
    }
});
exports.addProduct = addProduct;
// export deleteProduct operation
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteProduct = yield productModel.deleteProduct(parseInt(req.params.id));
        res.send({
            message: "This is delete product from table",
            data: Object.assign({}, deleteProduct)
        });
    }
    catch (error) {
        throw new Error('hello from delete error');
    }
});
exports.deleteProduct = deleteProduct;
// export getProduct operation
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getProduct = yield productModel.getProduct(parseInt(req.params.id));
        res.send({
            message: "This is get a product from table",
            data: Object.assign({}, getProduct)
        });
    }
    catch (error) {
        throw new Error('hello from delete error');
    }
});
exports.getProduct = getProduct;
// export updateProduct operation
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateProduct = yield productModel.updateProduct(Number(req.body.id), req.body.name, Number(req.body.price), req.body.category);
        res.send({
            message: "This is update product in table",
            data: Object.assign({}, updateProduct)
        });
    }
    catch (error) {
        throw new Error('hello from update error');
    }
});
exports.updateProduct = updateProduct;
