const pool = require('../libs/postgres.pool');

class TasksService {
    async getAll(query = 'SELECT * FROM tasks') {
        const response = await pool.query(query);
        return response.rows;
    }
}

module.exports = TasksService;
