import express, { Request, Response } from "express";
import configTest from "../tests/config.test";
import sequelize from "../tests/server.test";
const { Client } = require("pg");





const server = require('../tests/server.test'); // sequelize model

// beforeAll(async () => {
//   await server.sync({ force: true });
//   await server.bulkCreate([ /* data for insert */ ]);
// });

// then there are tests




// Connecting to a database using Sequelize package 
const { Sequelize } = require('sequelize');

// Passing parameters to connect
// const sequelize = new Sequelize(configTest.database, configTest.user, configTest.password, {
//   host: 'localhost',
//   dialect: 'postgres',
//   sync: true, //create the table if it not exists
// });

// Testing the connection
describe("Test connection with database server endpoint", () => {
  it("should have Connection with the right Database in Environment", async () => {
    const connect = async () => {
      try {
        await server.sequelize.authenticate();
        console.log('Connection has been established successfully with database: ', configTest.database);
      } catch (error) {
        console.log('Unable to connect to the database: ', configTest.database);
      }
    };    
    console.log('connect: ', connect());
    
    expect(connect).withContext('Connection has been established successfully with database: storedev');
  });
  it("should have Unable to connect with the right Database in Environment", async () => {
    const connect = async () => {
      try {
        await server.sequelize.authenticate();
        return true;
      } catch (error) {
        return false;
      }
    };       
    expect(connect).toThrowError;
  });
});


