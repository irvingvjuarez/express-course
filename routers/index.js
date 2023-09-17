const express = require('express');
const cors = require('cors');
const v1Router = require("./v1/v1.router");
const { errorHandler, loggingErrors } = require('../middlewares/error.handler');

const PORT = 3000;

function routing(app) {
  app.use(cors({
    origin: (url, callback) => {
      if (['http://localhost:8080'].includes(url) || !url) {
        callback(null, true)
      } else {
        callback(new Error(url + ' not allowed'))
      }
    }
  }));
  app.use(express.json());
  app.use('/api/v1', v1Router);

  // middlewares
  app.use(loggingErrors);
  app.use(errorHandler);

  app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
}

module.exports = routing;
