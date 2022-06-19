import { Pool } from 'pg';
import config from '../config.test';

const pool = new Pool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    port: config.dbPort
})

  export default pool;
  