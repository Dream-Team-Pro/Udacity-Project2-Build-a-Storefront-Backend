"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
require('custom-env').env('dev');
dotenv_1.default.config();
console.log('POSTGRES_DB in config: ', process.env.POSTGRES_DB);
const { PORT, NODE_ENV, DB_HOST, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_DBPORT, SALT_ROUNDS, PEPPER, TOKEN_SECRET, TOKEN_HEADER_KEY } = process.env;
exports.default = {
    NODE_ENV: 'dev',
    port: PORT,
    host: DB_HOST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    dbPort: Number(POSTGRES_DBPORT),
    saltRounds: Number(SALT_ROUNDS),
    pepper: PEPPER,
    secret: TOKEN_SECRET,
    headerKey: TOKEN_HEADER_KEY
};
