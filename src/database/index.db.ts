import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config()

const {
    NODE_ENV,
    DB_HOST,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_DB,
    POSTGRES_DBTEST,
} = process.env

console.log('NODE_ENV in index.db: ', NODE_ENV)
console.log('POSTGRES_DB in index.db: ', POSTGRES_DB)
console.log('POSTGRES_DBTEST in index.db: ', POSTGRES_DBTEST)
console.log('DB_HOST in index.db: ', DB_HOST)

let pool: Pool

if (NODE_ENV === 'test') {
  pool = new Pool({
        host: DB_HOST,
        database: POSTGRES_DBTEST,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    })
}else {
  pool = new Pool({
        host: DB_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    })
}

export default pool