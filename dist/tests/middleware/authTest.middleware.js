"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_test_1 = __importDefault(require("../config.test"));
const auth = (req, res, next) => {
    try {
        const authHeader = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOiIxMjM0NSIsImlhdCI6MTY1NTU1ODY2MH0.k2xTSAS1SvtL23qv3ZupNLnb2EqeQGictAVvmEXsJNE';
        console.log('authHeader from test: ', authHeader);
        console.log('typeof authHeader from test: ', typeof authHeader);
        if (authHeader) {
            const bearer = 'bearer';
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOiIxMjM0NSIsImlhdCI6MTY1NTU1ODY2MH0.k2xTSAS1SvtL23qv3ZupNLnb2EqeQGictAVvmEXsJNE';
            console.log('bearer: ', bearer);
            console.log('token: ', token);
            if (token && bearer === 'bearer') {
                // if(token && bearer === 'bearer') {
                // verify token
                const decoder = jsonwebtoken_1.default.verify(token, config_test_1.default.secret);
                console.log('decoder from auth test: ', decoder);
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
