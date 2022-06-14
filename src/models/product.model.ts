import Product from "../interfaces/product.interface";
import db from "../database/index.db";

class ProductModel {

    // get all products -> index
    async getAllProducts(): Promise<Product[]> {
        try {           
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = "SELECT id, title, price FROM products";
            const result = await conn.query(sql);
            //close connection
            conn.release();
            //return all products            
            return result.rows;
        } catch (error) {
            throw new Error(`Cann't get all products, you have an error: ${error}. So, try again`);                       
        }
    }
    // get product by id -> show

    // create product  
    async addProduct(product: Product): Promise<Product> {
        try {           
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = "INSERT INTO products (title, price) VALUES ($1, $2);";
            const result = await conn.query(sql, [product.title, product.price]);
            //close connection
            conn.release();
            //return all products            
            return result.rows[0];
        } catch (error) {
            throw new Error(`Cann't get all products, you have an error: ${error}. So, try again`);                       
        }
    }

    // delete product 
    async deleteProduct(id: string): Promise<Product> {
        try {           
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = "DELETE FROM products WHERE id=($1);";
            const result = await conn.query(sql, [id]);
            //close connection
            conn.release();
            //return all products            
            return result.rows[0];
        } catch (error) {
            throw new Error(`Could not delete Product: ${id}. Error: ${error}`);                       
        }
        
    }
    
    
}

export default ProductModel;

