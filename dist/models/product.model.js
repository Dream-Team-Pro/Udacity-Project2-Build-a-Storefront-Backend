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
class ProductModel {
    // get all products -> index
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //open DB connection
                const conn = yield index_db_1.default.connect();
                //run query on DB
                const sql = "SELECT id, name, price, category FROM products";
                const result = yield conn.query(sql);
                //close connection
                conn.release();
                //return all products            
                return result.rows;
            }
            catch (error) {
                throw new Error(`unable get all products No. : ${error}`);
            }
        });
    }
    // create product  
    addProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //open DB connection
                const conn = yield index_db_1.default.connect();
                //run query on DB
                const sql = "INSERT INTO products (name, price, category) VALUES ($1, $2, $3);";
                const result = yield conn.query(sql, [product.name, product.price, product.category]);
                //close connection
                conn.release();
                //return all products            
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`unable create product (${product.name}): ${error}`);
            }
        });
    }
    // delete product 
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //open DB connection
                const conn = yield index_db_1.default.connect();
                //run query on DB
                const sql = "DELETE FROM products WHERE id=($1);";
                const result = yield conn.query(sql, [id]);
                //close connection
                conn.release();
                //return result            
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`unable to delete product No. (${id}): ${error}`);
            }
        });
    }
    // get product by id 
    getProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //open DB connection
                const conn = yield index_db_1.default.connect();
                //run query on DB
                const sql = "SELECT id, name, price, category FROM products WHERE id=($1);";
                const result = yield conn.query(sql, [id]);
                //close connection
                conn.release();
                //return all products            
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`unable get product No. (${id}): ${error}`);
            }
        });
    }
    // update product
    updateProduct(id, name, price, category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //open DB connection
                const conn = yield index_db_1.default.connect();
                //run query on DB
                const sql = `UPDATE products SET name=($2), price=($3), category=($4) WHERE id=($1);`;
                const result = yield conn.query(sql, [id, name, price, category]);
                //close connection                     
                conn.release();
                //return all products            
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`unable update prodtc (${name}): ${error}`);
            }
        });
    }
}
exports.default = ProductModel;
