"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const auth = (req, res, next) => {
    try {
        const authHeader = req.get('authorization');
        console.log('authHeader: ', authHeader);
        console.log('typeof authHeader: ', typeof authHeader);
        if (authHeader) {
            const bearer = authHeader.split(' ')[0].toLowerCase();
            const token = authHeader.split(' ')[1];
            console.log('bearer: ', bearer);
            console.log('token: ', token);
            if (token && bearer === 'bearer') {
                // if(token && bearer === 'bearer') {
                // verify token
                const decoder = jsonwebtoken_1.default.verify(token, config_1.default.secret);
                console.log('decoder: ', decoder);
                if (decoder) {
                    next();
                }
                else {
                    console.log("no token found");
                }
            }
        }
        else {
            res.status(403).json({
                status: "No authorization found",
                message: "No authorization found"
            });
        }
    }
    catch (error) {
        res.status(400).json({
            status: "Data Error while Login User",
            message: "Incorrect firstname or password"
        });
    }
};
exports.auth = auth;
