const { faker } = require('@faker-js/faker');
const express = require('express');

const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
  const {limit} = req.query;

  const USERS_SIZE = 50;
  const users = new Array(limit || USERS_SIZE)
    .fill({})
    .map(() => ({
      name: faker.person.fullName(),
      age: faker.number.int(90)
    }))

  res.json({
    data: users
  })
})

module.exports = usersRouter;
