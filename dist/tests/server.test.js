"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_test_1 = __importDefault(require("../tests/config.test"));
// Connecting to a database using Sequelize package 
const { Sequelize } = require('sequelize');
const index_test_db_1 = __importDefault(require("./database/index.test.db"));
const port = config_test_1.default.port || 3000;
// // Connecting to a database using Sequelize package 
// const { Sequelize } = require('sequelize');
// // Passing parameters to connect
// const sequelize = new Sequelize(config.database, config.user, config.password, {
//   host: 'localhost',
//   dialect: 'postgres',
//   sync: true, //create the table if it not exists
// });
// // connection to DB
index_test_db_1.default.connect().then((client) => {
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
