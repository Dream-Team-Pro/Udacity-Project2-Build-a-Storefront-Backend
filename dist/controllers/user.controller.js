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
exports.loginUser = exports.updateUser = exports.getUser = exports.deleteUser = exports.addUser = exports.getAllUsers = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const userModel = new user_model_1.default();
// export getAllUsers operation
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel.getAllUsers();
        res.send({
            message: "Success to get all users in table",
            data: Object.assign({}, users)
        });
    }
    catch (error) {
        throw new Error('oops!, we can not get all users. try again');
    }
});
exports.getAllUsers = getAllUsers;
// export addProduct operation
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addUser = yield userModel.addUser(req.body);
        res.send({
            message: "Success to add user in table",
            data: Object.assign({}, addUser)
        });
    }
    catch (error) {
        throw new Error('oops!, we can not add user. try again');
    }
});
exports.addUser = addUser;
// export deleteUser operation
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteUser = yield userModel.deleteUser(parseInt(req.params.id));
        res.send({
            message: "Success to delete user from table",
            data: Object.assign({}, deleteUser)
        });
    }
    catch (error) {
        throw new Error('oops!, we can not delete the user. try again');
    }
});
exports.deleteUser = deleteUser;
// export getUser operation
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getUser = yield userModel.getUser(parseInt(req.params.id));
        res.send({
            message: "Success to get a user from table",
            data: Object.assign({}, getUser)
        });
    }
    catch (error) {
        throw new Error('oops!, we can not get the user. try again');
    }
});
exports.getUser = getUser;
// export updateUser operation
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateUser = yield userModel.updateUser(Number(req.body.id), req.body.firstname, req.body.lastname, req.body.password);
        res.send({
            message: "Success to update the user in table",
            data: Object.assign({}, updateUser)
        });
    }
    catch (error) {
        throw new Error('oops!, we can not update the user. try again');
    }
});
exports.updateUser = updateUser;
// export loginUser operation
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loginUser = yield userModel.loginUser(req.body.firstname, req.body.password);
        if (loginUser) {
            // assign token 
            const token = jsonwebtoken_1.default.sign({ firstname: req.body.firstname, password: req.body.password }, config_1.default.secret);
            res.status(200).json({
                status: "Login User Success",
                message: "Success to login a user",
                data: Object.assign(Object.assign({}, loginUser), { token })
            });
            console.log('token controller: ', token);
        }
        else {
            res.status(403).json({
                status: "Data Error while Login User",
                message: "Incorrect firstname or password"
            });
        }
    }
    catch (error) {
        res.status(400).json({
            status: "General Error while Login User",
            message: "Incorrect firstname or password"
        });
    }
});
exports.loginUser = loginUser;
