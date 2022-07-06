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
const index_db_1 = __importDefault(require("../database/index.db"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../config"));
class userModel {
    // get all users -> index
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //open DB connection
                const conn = yield index_db_1.default.connect();
                //run query on DB
                const sql = "SELECT id, firstname, lastname, password FROM users";
                const result = yield conn.query(sql);
                //close connection
                conn.release();
                //return all users            
                return result.rows;
            }
            catch (error) {
                throw new Error(`unable get all users No. : ${error}`);
            }
        });
    }
    // create user  
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //open DB connection
                const conn = yield index_db_1.default.connect();
                //run query on DB
                const sql = "INSERT INTO users (firstname, lastname, password) VALUES ($1, $2, $3)";
                const hash = bcrypt_1.default.hashSync(`${user.password}${config_1.default.pepper}`, config_1.default.saltRounds);
                // const hash = bcrypt.hashSync(`${user.password}${config.pepepr}`, config.saltRounds);
                const result = yield conn.query(sql, [user.firstname, user.lastname, hash]);
                //close connection
                conn.release();
                //return all users            
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`unable create user (${user.firstname}): ${error}`);
            }
        });
    }
    // delete user 
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //open DB connection
                const conn = yield index_db_1.default.connect();
                //run query on DB
                const sql = "DELETE FROM users WHERE id=($1);";
                const result = yield conn.query(sql, [id]);
                //close connection
                conn.release();
                //return result            
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`unable delete user No. (${id}): ${error}`);
            }
        });
    }
    // get user by id 
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //open DB connection
                const conn = yield index_db_1.default.connect();
                //run query on DB
                const sql = "SELECT id, firstname, lastname, password FROM users WHERE id=($1)";
                const result = yield conn.query(sql, [id]);
                //close connection
                conn.release();
                //return all users            
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`unable get user No. (${id}): ${error}`);
            }
        });
    }
    // update user
    updateUser(id, firstname, lastname, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //open DB connection
                const conn = yield index_db_1.default.connect();
                //run query on DB
                const sql = `UPDATE users SET firstname=($2), lastname=($3), password=($4) WHERE id=($1);`;
                const hash = bcrypt_1.default.hashSync(`${password}${config_1.default.pepper}`, config_1.default.saltRounds);
                // const hash = bcrypt.hashSync(`${password}${config.pepepr}`, config.saltRounds);           
                const result = yield conn.query(sql, [id, firstname, lastname, hash]);
                //close connection                     
                conn.release();
                //return all users            
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`unable update user (${firstname}): ${error}`);
            }
        });
    }
    // login user
    loginUser(firstname, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //open DB connection
                const conn = yield index_db_1.default.connect();
                //run query on DB
                const sql = `SELECT firstname, password FROM users WHERE firstname=($1)`;
                // const sql = `SELECT password FROM users WHERE firstname=($1) AND lastname=($2)`;
                const result = yield conn.query(sql, [firstname]);
                //close connection                     
                conn.release();
                //return all users      
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`unable login user (${firstname}): ${error}`);
            }
        });
    }
}
exports.default = userModel;
