const boom = require("@hapi/boom");

function dataValidationHandler(schema, bodyProp) {
  return (req, res, next) => {
    const data = req[bodyProp];
    const {error} = schema.validate(data, {abortEarly: false});

    if (error) {
      next(boom.badRequest(error))
    } else {
      next()
    }
  }
}

module.exports = dataValidationHandler;
