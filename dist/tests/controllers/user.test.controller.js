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
exports.loginUser = exports.getUser = exports.deleteUser = exports.addUser = exports.getAllUsers = void 0;
const user_test_model_1 = __importDefault(require("../models/user.test.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_test_1 = __importDefault(require("../config.test"));
const userModel = new user_test_model_1.default();
// export getAllUsers operation
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel.getAllUsers();
        console.log('users control: ', users);
    }
    catch (error) {
        throw new Error('hello from get user test error');
    }
});
exports.getAllUsers = getAllUsers;
// export addProduct operation
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addUser = yield userModel.addUser({
            "firstname": "mohamed",
            "lastname": "ahmed",
            "password": "12345"
        });
        res.send({
            message: "Success to Add user test in test table",
            data: Object.assign({}, addUser)
        });
    }
    catch (error) {
        throw new Error('Error when Add user test to test table');
    }
});
exports.addUser = addUser;
// export deleteUser operation
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteUser = yield userModel.deleteUser(1);
        res.send({
            message: "This is delete user test from table",
            data: Object.assign({}, deleteUser)
        });
    }
    catch (error) {
        throw new Error('hello from delete user test error');
    }
});
exports.deleteUser = deleteUser;
// export getUser operation
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getUser = yield userModel.getUser(1);
        res.send({
            message: "This is get a user test from table",
            data: Object.assign({}, getUser)
        });
    }
    catch (error) {
        throw new Error('hello from get user test error');
    }
});
exports.getUser = getUser;
// export updateUser operation
// export const updateUser = async(req:Request, res:Response): Promise<void> => {
//     try {
//         const updateUser = await userModel.updateUser(Number(req.body.id), req.body.firstname, req.body.lastname, req.body.password);       
//         res.send({
//             message: "This is update user test in table",
//             data: {...updateUser}
//         })
//     } catch (error) {        
//         throw new Error('hello from update user test error')        
//     }
// };
// export loginUser operation
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loginUser = yield userModel.loginUser(req.body.firstname, req.body.password);
        if (loginUser) {
            // assign token 
            const token = jsonwebtoken_1.default.sign({ firstname: req.body.firstname, password: req.body.password }, config_test_1.default.secret);
            res.status(200).json({
                status: "Login User Success",
                message: "This is login user test success",
                data: Object.assign(Object.assign({}, loginUser), { token })
            });
            console.log('token controller: ', token);
        }
        else {
            res.status(403).json({
                status: "Data Error while Login user test",
                message: "Incorrect firstname or password"
            });
        }
    }
    catch (error) {
        res.status(400).json({
            status: "General Error while Login user test",
            message: "Incorrect firstname or password"
        });
    }
});
exports.loginUser = loginUser;
