const sequelize = require('../libs/sequelize');

class TasksService {
    async getAll(query = 'SELECT * FROM tasks') {
        const [data, metadata] = await sequelize.query(query);
        return {data, metadata};
    }
}

module.exports = TasksService;
