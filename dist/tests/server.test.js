"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_test_1 = __importDefault(require("../tests/config.test"));
// Connecting to a database using Sequelize package 
const { Sequelize } = require('sequelize');
// Passing parameters to connect
const sequelize = new Sequelize('mahameho', config_test_1.default.user, config_test_1.default.password, {
    host: 'localhost',
    dialect: 'postgres',
    sync: true, //create the table if it not exists  
});
exports.default = sequelize;
