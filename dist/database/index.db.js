"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config_1 = __importDefault(require("../config"));
const pool = new pg_1.Pool({
    host: config_1.default.host,
    user: config_1.default.user,
    password: config_1.default.password,
    database: config_1.default.database,
    port: config_1.default.dbPort
});
exports.default = pool;
