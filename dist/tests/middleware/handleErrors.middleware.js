"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMiddleware = (error, req, res) => {
    const status = error.status || 500;
    const message = error.message || 'oops, something wrong';
    res.status(status).json({ status, message });
};
exports.default = errorMiddleware;
