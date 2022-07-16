import configTest from "../tests/config.test";
// Connecting to a database using Sequelize package 
const { Sequelize } = require('sequelize');
import db from "./database/index.test.db";
const port = configTest.port || 3000;

// // Connecting to a database using Sequelize package 
// const { Sequelize } = require('sequelize');

// // Passing parameters to connect
// const sequelize = new Sequelize(config.database, config.user, config.password, {
//   host: 'localhost',
//   dialect: 'postgres',
//   sync: true, //create the table if it not exists
// });

// // connection to DB
db.connect().then((client) => {
  return client
  .query("SELECT NOW()")
  .then((res) => {
    client.release();
    console.log(res.rows);
  })
  .catch((err) => {
    client.release();
    console.log(err.stack);    
  });
});
