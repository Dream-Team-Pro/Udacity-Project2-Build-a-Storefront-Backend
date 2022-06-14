"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const error_middleware_1 = __importDefault(require("./middleware/error.middleware"));
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// Add routes
// app.use(routes);
app.get("/", (req, res) => {
    throw new Error('Error exist');
    res.json({ message: "Hello World!" });
});
app.use((_req, res) => {
    res.status(404).json({
        message: 'You are lost'
    });
});
app.use(error_middleware_1.default);
// app.listen(port, function() {
//   const url = `\x1b[2mhttp://localhost:${port}\x1b[0m`;
//   console.log(`Please open ${url} to review the project ...`);
// });
app.listen(port, () => {
    console.log(`Server Started at localhost:${port}`);
});
exports.default = app;
