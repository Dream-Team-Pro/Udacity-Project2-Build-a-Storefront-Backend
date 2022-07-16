"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_test_1 = __importDefault(require("../tests/config.test"));
// import sequelize from "../tests/server.test";
const { Client } = require("pg");
console.log('database: ', config_test_1.default.database);
const server = require('../tests/server.test'); // sequelize model
// beforeAll(async () => {
//   await server.sync({ force: true });
//   await server.bulkCreate([ /* data for insert */ ]);
// });
// then there are tests
// Connecting to a database using Sequelize package 
// const { Sequelize } = require('sequelize');
// Passing parameters to connect
// const sequelize = new Sequelize(configTest.database, configTest.user, configTest.password, {
//   host: 'localhost',
//   dialect: 'postgres',
//   sync: true, //create the table if it not exists
// });
// Testing the connection
describe("Test connection with database server endpoint", () => {
    it("should have Connection with the right Database in Environment", () => __awaiter(void 0, void 0, void 0, function* () {
        const connect = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield server.sequelize.authenticate();
                console.log('Connection has been established successfully with database: ', config_test_1.default.database);
            }
            catch (error) {
                console.log('Unable to connect to the database: ', config_test_1.default.database);
            }
        });
        console.log('connect: ', connect());
        expect(connect).withContext('Connection has been established successfully with database: storedev');
    }));
    it("should have Unable to connect with the right Database in Environment", () => __awaiter(void 0, void 0, void 0, function* () {
        const connect = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield server.sequelize.authenticate();
                return true;
            }
            catch (error) {
                return false;
            }
        });
        expect(connect).toThrowError;
    }));
});
