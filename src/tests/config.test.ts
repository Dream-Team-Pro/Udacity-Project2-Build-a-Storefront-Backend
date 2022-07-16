import dotenv from "dotenv";
// require('custom-env').env('dev')

dotenv.config();
console.log('POSTGRES_DB in config-test: ', process.env.POSTGRES_DB)

const {
    PORT,
    NODE_ENV,
    DB_HOST,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_DB,
    POSTGRES_DBPORT,
    SALT_ROUNDS,
    PEPPER,
    TOKEN_SECRET,
    TOKEN_HEADER_KEY
} = process.env;

export default {
    NODE_ENV : 'test',
    port: PORT,
    host: DB_HOST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    dbPort: Number(POSTGRES_DBPORT),
    saltRounds: Number(SALT_ROUNDS),
    pepper: PEPPER, 
    secret: TOKEN_SECRET,
    headerKey: TOKEN_HEADER_KEY
};

