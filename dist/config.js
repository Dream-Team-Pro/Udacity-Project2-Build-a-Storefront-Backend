"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
// Register
dotenv_1.default.config();
// console.log(process.env);;
// object distracting
const { PORT, MODE_ENV, DB_HOST, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_DBTest, POSTGRES_DBPORT, SALT_ROUNDS, PEPPER, TOKEN_SECRET, TOKEN_HEADER_KEY } = process.env;
exports.default = {
    port: PORT,
    host: DB_HOST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: MODE_ENV === "dev" ? POSTGRES_DB : POSTGRES_DBTest,
    dbPort: Number(POSTGRES_DBPORT),
    saltRounds: Number(SALT_ROUNDS),
    pepper: PEPPER,
    secret: TOKEN_SECRET,
    headerKey: TOKEN_HEADER_KEY
};
