const express = require('express');

const loginRouter = express.Router();

loginRouter.get('/', (req, res) => {
  res.send('Login endpoint')
})

module.exports = loginRouter;
