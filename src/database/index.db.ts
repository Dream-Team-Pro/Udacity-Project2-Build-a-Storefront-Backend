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