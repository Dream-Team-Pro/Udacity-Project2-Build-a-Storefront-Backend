import dotenv from "dotenv";

// Register
dotenv.config();
// console.log(process.env);;
// object distracting
const {
    PORT,
    MODE_ENV,
    DB_HOST,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_DB,
    POSTGRES_DBTest,
    POSTGRES_DBPORT
} = process.env;

export default {
    port: PORT,
    host: DB_HOST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: MODE_ENV === "dev" ? POSTGRES_DB : POSTGRES_DBTest,
    dbPort: Number(POSTGRES_DBPORT),
};

