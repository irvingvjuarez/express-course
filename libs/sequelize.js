const { Sequelize } = require('sequelize');
const config = require('../config/db.config');

const { user, password, host, port, database } = config;
const URI = `postgres://${user}:${password}@${host}:${port}/${database}`;

const sequelize = new Sequelize(URI, {dialec: 'postgres', logging: console.log});

module.exports = sequelize;
