import dotenv from "dotenv";

// Register
dotenv.config();
// console.log(process.env);;
// object distracting
const {
    PORT,
    DB_HOST,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_DBTest,
    POSTGRES_DBPORT,
    SALT_ROUNDS,
    PEPPER,
    TOKEN_SECRET,
    TOKEN_HEADER_KEY
} = process.env;

export default {
    port: PORT,
    host: DB_HOST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DBTest,
    dbPort: Number(POSTGRES_DBPORT),
    saltRounds: Number(SALT_ROUNDS),
    pepper: PEPPER, 
    secret: TOKEN_SECRET,
    headerKey: TOKEN_HEADER_KEY
};

