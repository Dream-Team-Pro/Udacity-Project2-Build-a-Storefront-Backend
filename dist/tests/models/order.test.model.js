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
const fs = require('fs');
// const conn = await db.connect()
// //run query on DB
// const sql = fs.readFileSync('../database/orders.db', 'utf8');
// const result = await conn.query(sql);
// //close connecti
class orderModel {
    // get all orders -> index
    getAllOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //open DB connection
                const conn = yield index_test_db_1.default.connect();
                //run query on DB
                const sql = "SELECT id, user_id, status FROM orders";
                const result = yield conn.query(sql);
                //close connection
                conn.release();
                //return all orders            
                return result.rows;
            }
            catch (error) {
                throw new Error(`unable get all orders No. : ${error}`);
            }
        });
    }
    // create order  
    addOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //open DB connection
                const conn = yield index_test_db_1.default.connect();
                //run query on DB
                const sql = "INSERT INTO orders (user_id, status) VALUES ($1, $2);";
                const result = yield conn.query(sql, [order.user_id, order.status]);
                //close connection
                conn.release();
                //return all orders            
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`unable create order No. (${order.id}): ${error}`);
            }
        });
    }
    // delete order 
    deleteOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //open DB connection
                const conn = yield index_test_db_1.default.connect();
                //run query on DB
                const sql = "DELETE FROM orders WHERE id=($1);";
                const result = yield conn.query(sql, [id]);
                //close connection
                conn.release();
                //return result            
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`Cann't delete order: ${id}. Error: ${error}`);
            }
        });
    }
    // get order by id 
    getOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //open DB connection
                const conn = yield index_test_db_1.default.connect();
                //run query on DB
                const sql = "SELECT id, user_id, status FROM orders WHERE id=($1);";
                const result = yield conn.query(sql, [id]);
                //close connection
                conn.release();
                //return all orders            
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`unable get order No. (${id}): ${error}`);
            }
        });
    }
    // update order
    updateOrder(id, user_id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //open DB connection
                const conn = yield index_test_db_1.default.connect();
                //run query on DB
                const sql = `UPDATE orders SET user_id=($2), status=($3) WHERE id=($1);`;
                const result = yield conn.query(sql, [id, user_id, status]);
                //close connection                     
                conn.release();
                //return all orders            
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`unable update order No. (${id}): ${error}`);
            }
        });
    }
}
exports.default = orderModel;
