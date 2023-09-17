const express = require('express');
const routing = require('./routers');

const app = express();
routing(app);
