import configTest from "../tests/config.test";
// Connecting to a database using Sequelize package 
const { Sequelize } = require('sequelize');

// Passing parameters to connect
const sequelize = new Sequelize('mahameho', configTest.user, configTest.password, {
  host: 'localhost',
  dialect: 'postgres',
  sync: true, //create the table if it not exists  
});

export default sequelize;
