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
const index_test_db_1 = __importDefault(require("../database/index.test.db"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_test_1 = __importDefault(require("../config.test"));
const fs = require('fs');
// try {
//     var data = fs.readFileSync('../database/users.db', 'utf8');
//     console.log(data);    
// } catch(e) {
//     console.log('Error:', e);
// }
// dewv code
class userModel {
    // get all users -> index
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //open DB connection
                const conn = yield index_test_db_1.default.connect();
                //run query on DB
                const sql = fs.readFileSync('../database/users.db', 'utf8');
                console.log('users mode: ', sql);
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
                const conn = yield index_test_db_1.default.connect();
                //run query on DB
                const sql = "INSERT INTO users (firstname, lastname, password) VALUES ($1, $2, $3)";
                const hash = bcrypt_1.default.hashSync(`${user.password}${config_test_1.default.pepper}`, config_test_1.default.saltRounds);
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
                const conn = yield index_test_db_1.default.connect();
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
                const conn = yield index_test_db_1.default.connect();
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
                const conn = yield index_test_db_1.default.connect();
                //run query on DB
                const sql = `UPDATE users SET firstname=($2), lastname=($3), password=($4) WHERE id=($1);`;
                const hash = bcrypt_1.default.hashSync(`${password}${config_test_1.default.pepper}`, config_test_1.default.saltRounds);
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
                const conn = yield index_test_db_1.default.connect();
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
/*  tests code
import User from "../../interfaces/user.interface";
import db from "../database/index.test.db";
import bcrypt from 'bcrypt';
import config from '../config.test';

class userModel {
    // get all users -> index
    async getAllUsers(): Promise<User[]> {
        try {
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            // const sql = "SELECT id, firstname, lastname, password FROM usrList[]";
            const sql = require("../../../src/tests/database/dummyDataBase"); // Including dummyDataBase.ts
            // Dummy user list
            const result = await conn.query(sql);
            console.log('users model: ', result);
            //return all users
            return result;
        } catch (error) {
            throw new Error(`unable get all users test No. : ${error}`);
        }
    }

    // create user
    async addUser(user: User): Promise<User> {
        try {
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = "INSERT INTO users (firstname, lastname, password) VALUES ($1, $2, $3)";
            const hash = bcrypt.hashSync(`${user.password}${config.pepper}`, config.saltRounds);
            // const hash = bcrypt.hashSync(`${user.password}${config.pepepr}`, config.saltRounds);
            const result = await conn.query(sql, [user.firstname, user.lastname, hash]);
            //close connection
            conn.release();
            //return all users
            return result.rows[0];
        } catch (error) {
            throw new Error(`unable create user test (${user.firstname}): ${error}`);
        }
    }

    // delete user
    async deleteUser(id: number): Promise<User | null> {
        try {
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = "DELETE FROM users WHERE id=($1);";
            const result = await conn.query(sql, [id]);
            //close connection
            conn.release();
            //return result
            return result.rows[0];
        } catch (error) {
            throw new Error(`unable delete user test No. (${id}): ${error}`);
        }
    }

    // get user by id
    async getUser(id: number): Promise<User | null> {
        try {
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = "SELECT id, firstname, lastname, password FROM users WHERE id=($1)";
            const result = await conn.query(sql, [id]);
            //close connection
            conn.release();
            //return all users
            return result.rows[0];
        } catch (error) {
            throw new Error(`unable get user test No. (${id}): ${error}`);
        }
    }

    // update user
    async updateUser(id: number, firstname: string, lastname: string, password: string): Promise<User | null> {
        try {
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = `UPDATE users SET firstname=($2), lastname=($3), password=($4) WHERE id=($1);`;
            const hash = bcrypt.hashSync(`${password}${config.pepper}`, config.saltRounds);
            // const hash = bcrypt.hashSync(`${password}${config.pepepr}`, config.saltRounds);
            const result = await conn.query(sql, [id, firstname, lastname, hash]);
            //close connection
            conn.release();
            //return all users
            return result.rows[0];
        } catch (error) {
            throw new Error(`unable update user test (${firstname}): ${error}`);
        }
    }

    // login user
    async loginUser(firstname: string, password: string): Promise<User | null> {
        try {
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = `SELECT firstname, password FROM users WHERE firstname=($1)`;
            // const sql = `SELECT password FROM users WHERE firstname=($1) AND lastname=($2)`;
            const result = await conn.query(sql, [firstname]);
            //close connection
            conn.release();
            //return all users
            return result.rows[0];
        } catch (error) {
            throw new Error(`unable login user test (${firstname}): ${error}`);
        }
    }

    // login user test
    async loginUserTest(firstname: string, password: string): Promise<User | null> {
        try {
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = `SELECT firstname, password FROM users WHERE firstname=($1)`;
            // const sql = `SELECT password FROM users WHERE firstname=($1) AND lastname=($2)`;
            const result = await conn.query(sql, [firstname]);
            //close connection
            conn.release();
            //return all users
            return result.rows[0];
        } catch (error) {
            throw new Error(`unable login user test (${firstname}): ${error}`);
        }
    }

}

export default userModel;
*/
