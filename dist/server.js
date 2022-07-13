"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const body_parser_1 = __importDefault(require("body-parser"));
const handleErrors_middleware_1 = __importDefault(require("./middleware/handleErrors.middleware"));
const config_1 = __importDefault(require("./config"));
const index_db_1 = __importDefault(require("./database/index.db"));
const app = (0, express_1.default)();
const port = config_1.default.port || 3000;
// Connecting to a database using Sequelize package 
const { Sequelize } = require('sequelize');
// Passing parameters to connect
const sequelize = new Sequelize(config_1.default.database, config_1.default.user, config_1.default.password, {
    host: 'localhost',
    dialect: 'postgres',
    sync: true, //create the table if it not exists
});
// // connection to DB
index_db_1.default.connect().then((client) => {
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
// // Connecting to a database using Sequelize package 
// const { Sequelize } = require('sequelize');
// // Passing parameters to connect
// const sequelize = new Sequelize(config.database, config.user, config.password, {
//   host: 'localhost',
//   dialect: 'postgres'
// });
// // Testing the connection
// const connect = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully with database:', config.database);
//   } catch (error) {
//     console.log('Unable to connect to the database');
//   }
// };
// connect();
// Add routes
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    //throw new Error('Error exist');
    res.json({ message: "Hello World in Udacity Project 2 Build a Storefront Backend!" });
});
app.use("/api", index_1.default);
app.use(handleErrors_middleware_1.default);
app.listen(port, () => {
    console.log(`Server Started at localhost:${port}`);
});
exports.default = app;
