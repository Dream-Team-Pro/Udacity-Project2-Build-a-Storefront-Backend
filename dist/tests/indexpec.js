"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_test_1 = __importDefault(require("./routes/index.test"));
const handleErrors_middleware_1 = __importDefault(require("../middleware/handleErrors.middleware"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
// Add routes
app.use(body_parser_1.default.json());
app.use("/api", index_test_1.default);
console.log('from indexSpec\n');
app.use(handleErrors_middleware_1.default);
