const { Client } = require('pg');
const config = require('../config/db.config');

const client = new Client(config)

module.exports = client;