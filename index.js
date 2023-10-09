require('dotenv').config();

const express = require('express');
const routing = require('./routers');
const client = require('./libs/postgres');

const app = express();

function onSuccess() {
    console.log('Successfully connected to the database!');
    routing(app);
}

function onFail(reason) {
    console.log('Failed to connect to the database');
    console.log(reason);
}

client.connect()
    .then(onSuccess, onFail)
