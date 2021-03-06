import User from "../interfaces/user.interface";
import db from "../database/index.db";
import bcrypt from 'bcrypt';
import config from '../config';

class userModel {
    // get all users -> index
    async getAllUsers(): Promise<User[]> {
        try {           
            //open DB connection
            const conn = await db.connect()
            //run query on DB
            const sql = "SELECT id, firstname, lastname, password FROM users";
            const result = await conn.query(sql);
            //close connection
            conn.release();
            //return all users            
            return result.rows;
        } catch (error) {
            throw new Error(`unable get all users : ${error}`);                       
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
            //return user                       
            return result.rows[0];
        } catch (error) {
            throw new Error(`unable create user (${user.firstname}): ${error}`);                       
        }
    }

    // delete user 
    async deleteUser(id: number): Promise<User> {
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
            throw new Error(`unable delete user No. (${id}): ${error}`);                       
        }        
    }

    // get user by id 
    async getUser(id: number): Promise<User> {
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
            throw new Error(`unable get user No. (${id}): ${error}`);                       
        }        
    }

    // update user
    async updateUser(id: number, firstname: string, lastname: string, password: string): Promise<User> {
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
            throw new Error(`unable update user (${firstname}): ${error}`);                       
        }
    }
    
    // login user
    async loginUser(firstname: string): Promise<User> {
        try {           
            //open DB connection
            const conn = await db.connect()
           
            //run query on DB
            const sql = `SELECT firstname FROM users WHERE firstname=($1)`;
            // const sql = `SELECT password FROM users WHERE firstname=($1) AND lastname=($2)`;
            const result = await conn.query(sql, [firstname]);
            //close connection                     
            conn.release();
            //return all users      
            return result.rows[0];
        } catch (error) {
            throw new Error(`unable login user (${firstname}): ${error}`);                       
        }
    }    
}

export default userModel;

