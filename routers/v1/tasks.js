const express = require('express');
const TasksService = require('../../services/tasks.service');

const tasksRouter = express.Router();
const Tasks = new TasksService()

tasksRouter.get('/', async (req, res) => {
    const response = await Tasks.getAll();
    res.send(response);
})

module.exports = tasksRouter;