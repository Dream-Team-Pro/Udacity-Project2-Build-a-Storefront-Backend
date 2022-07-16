import Product from "../interfaces/product.interface";
import db from "../database/index.db";

class ProductModel {
    // get all products -> index
    async getAllProducts(): Promise<Product[]> {
        try {           
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = "SELECT id, name, price, category FROM products";
            const result = await conn.query(sql);
            //close connection
            conn.release();
            //return all products            
            return result.rows;
        } catch (error) {
            throw new Error(`unable get all products No. : ${error}`);                       
        }
    }

    // create product  
    async addProduct(product: Product): Promise<Product> {
        try {           
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = "INSERT INTO products (name, price, category) VALUES ($1, $2, $3);";
            const result = await conn.query(sql, [product.name, product.price, product.category]);
            //close connection
            conn.release();
            //return all products            
            return result.rows[0];
        } catch (error) {
            throw new Error(`unable create product (${product.name}): ${error}`);                       
        }
    }

    // delete product 
    async deleteProduct(id: number): Promise<Product> {
        try {           
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = "DELETE FROM products WHERE id=($1);";
            const result = await conn.query(sql, [id]);
            //close connection
            conn.release();
            //return result            
            return result.rows[0];
        } catch (error) {
            throw new Error(`unable to delete product No. (${id}): ${error}`);                       
        }        
    }

    // get product by id 
    async getProduct(id: number): Promise<Product> {
        try {           
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = "SELECT id, name, price, category FROM products WHERE id=($1);";
            const result = await conn.query(sql, [id]);
            //close connection
            conn.release();
            //return all products            
            return result.rows[0];
        } catch (error) {
            throw new Error(`unable get product No. (${id}): ${error}`);                       
        }        
    }

    // update product
    async updateProduct(id: number, name: string, price: number, category: string): Promise<Product> {
        try {           
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = `UPDATE products SET name=($2), price=($3), category=($4) WHERE id=($1);`;
            const result = await conn.query(sql, [id, name, price, category]);
            //close connection                     
            conn.release();
            //return all products            
            return result.rows[0];
        } catch (error) {
            throw new Error(`unable update prodtc (${name}): ${error}`);                       
        }
    }        
}

export default ProductModel;

