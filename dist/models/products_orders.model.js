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
class proOrderModel {
    // get all orders -> index
    getAllProOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //open DB connection
                const conn = yield index_db_1.default.connect();
                //run query on DB
                const sql = `SELECT products_orders.id, products_orders.price, products.name, orders.quantity, orders.status 
                         FROM products_orders INNER JOIN products ON products_orders.product_id = products.id 
                         INNER JOIN orders ON products_orders.order_id = orders.id`;
                const result = yield conn.query(sql);
                //close connection
                conn.release();
                //return all products_orders            
                return result.rows;
            }
            catch (error) {
                throw new Error(`unable get all products_orders No. : ${error}`);
            }
        });
    }
    // create order  
    addProOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //open DB connection
                const conn = yield index_db_1.default.connect();
                //run query on DB
                const sql = "INSERT INTO products_orders (price, product_id, order_id) VALUES ($1, $2, $3);";
                const result = yield conn.query(sql, [order.price, order.product_id, order.order_id]);
                //close connection
                conn.release();
                //return all products_orders            
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`unable create pro_order No. (${order.id}): ${error}`);
            }
        });
    }
    // delete order 
    deleteProOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //open DB connection
                const conn = yield index_db_1.default.connect();
                //run query on DB
                const sql = "DELETE FROM products_orders WHERE id=($1);";
                const result = yield conn.query(sql, [id]);
                //close connection
                conn.release();
                //return result            
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`Cann't delete pro_order: ${id}. Error: ${error}`);
            }
        });
    }
    // get order by id 
    getProOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //open DB connection
                const conn = yield index_db_1.default.connect();
                //run query on DB
                const sql = "SELECT id, price, product_id, order_id FROM products_orders WHERE id=($1);";
                const result = yield conn.query(sql, [id]);
                //close connection
                conn.release();
                //return all products_orders            
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`unable get pro_order No. (${id}): ${error}`);
            }
        });
    }
    // update order
    updateProOrder(id, price, product_id, order_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //open DB connection
                const conn = yield index_db_1.default.connect();
                //run query on DB
                const sql = `UPDATE products_orders SET pric=($2), product_id=($3), order_id=($4) WHERE id=($1);`;
                const result = yield conn.query(sql, [id, price, product_id, order_id]);
                //close connection                     
                conn.release();
                //return all products_orders            
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`unable update pro_order No. (${id}): ${error}`);
            }
        });
    }
}
exports.default = proOrderModel;
