import Order from "../../interfaces/products_orders.interface";
import db from "../../database/index.db";
const fs = require('fs');

class proOrderModel {
    // get all orders -> index
    async getAllProOrders(): Promise<Order[]> {
        try {           
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = fs.readFileSync('../database/products_orders.db', 'utf8');
            const result = await conn.query(sql);           
            //close connection
            conn.release();
            //return all products_orders            
            return result.rows;
        } catch (error) {
            throw new Error(`unable get all products_orders No. : ${error}`);                       
        }
    }

    // create order  
    async addProOrder(order: Order): Promise<Order> {
        try {           
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = "INSERT INTO products_orders (price, product_id, order_id) VALUES ($1, $2, $3);";
            const result = await conn.query(sql, [order.price, order.product_id, order.order_id]);
            //close connection
            conn.release();
            //return all products_orders            
            return result.rows[0];
        } catch (error) {
            throw new Error(`unable create pro_order No. (${order.id}): ${error}`);                       
        }
    }

    // delete order 
    async deleteProOrder(id: number): Promise<Order | null> {
        try {           
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = "DELETE FROM products_orders WHERE id=($1);";
            const result = await conn.query(sql, [id]);
            //close connection
            conn.release();
            //return result            
            return result.rows[0];
        } catch (error) {
            throw new Error(`Cann't delete pro_order: ${id}. Error: ${error}`);                       
        }        
    }

    // get order by id 
    async getProOrder(id: number): Promise<Order | null> {
        try {           
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = "SELECT id, price, product_id, order_id FROM products_orders WHERE id=($1);";
            const result = await conn.query(sql, [id]);
            //close connection
            conn.release();
            //return all products_orders            
            return result.rows[0];
        } catch (error) {
            throw new Error(`unable get pro_order No. (${id}): ${error}`);                       
        }        
    }
    
    // update order
    async updateProOrder(id: number, price: number, product_id: number, order_id: number): Promise<Order | null> {
        try {           
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = `UPDATE products_orders SET pric=($2), product_id=($3), order_id=($4) WHERE id=($1);`;
            const result = await conn.query(sql, [id, price, product_id, order_id]);
            //close connection                     
            conn.release();
            //return all products_orders            
            return result.rows[0];
        } catch (error) {
            throw new Error(`unable update pro_order No. (${id}): ${error}`);                       
        }
    }        
}

export default proOrderModel;

