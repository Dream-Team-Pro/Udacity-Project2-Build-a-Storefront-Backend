import Order from "../../interfaces/order.interface";
import db from "../database/index.test.db";

class orderModel {
    // get all orders -> index
    async getAllOrders(): Promise<Order[]> {
        try {           
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = "SELECT id, product_id, quantity, user_id, status FROM orders";
            const result = await conn.query(sql);
            //close connection
            conn.release();
            //return all orders            
            return result.rows;
        } catch (error) {
            throw new Error(`unable get all orders No. : ${error}`);                       
        }
    }

    // create order  
    async addOrder(order: Order): Promise<Order> {
        try {           
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = "INSERT INTO orders (product_id, quantity, user_id, status) VALUES ($1, $2, $3, $4);";
            const result = await conn.query(sql, [order.product_id, order.quantity, order.user_id, order.status]);
            //close connection
            conn.release();
            //return all orders            
            return result.rows[0];
        } catch (error) {
            throw new Error(`unable create order No. (${order.id}): ${error}`);                       
        }
    }

    // delete order 
    async deleteOrder(id: number): Promise<Order | null> {
        try {           
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = "DELETE FROM orders WHERE id=($1);";
            const result = await conn.query(sql, [id]);
            //close connection
            conn.release();
            //return result            
            return result.rows[0];
        } catch (error) {
            throw new Error(`Cann't delete order: ${id}. Error: ${error}`);                       
        }        
    }

    // get order by id 
    async getOrder(id: number): Promise<Order | null> {
        try {           
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = "SELECT id, name, price, category FROM orders WHERE id=($1);";
            const result = await conn.query(sql, [id]);
            //close connection
            conn.release();
            //return all orders            
            return result.rows[0];
        } catch (error) {
            throw new Error(`unable get order No. (${id}): ${error}`);                       
        }        
    }
    
    // update order
    async updateOrder(id: number, product_id: number, quantity: number, user_id: number, status: string): Promise<Order | null> {
        try {           
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = `UPDATE orders SET product_id=($2), quantity=($3), user_id=($4), status=($5) WHERE id=($1);`;
            const result = await conn.query(sql, [id, product_id, quantity, user_id, status]);
            //close connection                     
            conn.release();
            //return all orders            
            return result.rows[0];
        } catch (error) {
            throw new Error(`unable update order No. (${id}): ${error}`);                       
        }
    }    
    
}

export default orderModel;

