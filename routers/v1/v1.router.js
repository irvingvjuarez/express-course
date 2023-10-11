const express = require('express');
const productsRouter = require('./products');
const usersRouter = require('./users');
const loginRouter = require('./login');
const categoryRouter = require('./category');
const tasksRouter = require('./tasks');

const v1Router = express.Router()
v1Router.get('/', (req, res) => {
  res.send('Hello World');
})

v1Router.use('/products', productsRouter);
v1Router.use('/users', usersRouter);
v1Router.use('/login', loginRouter);
v1Router.use('/category', categoryRouter);
v1Router.use('/tasks', tasksRouter)

module.exports = v1Router;
