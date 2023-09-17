exports.loggingErrors = function loggingErrors(error, _req, _res, next) {
  console.log(error);
  next(error);
}

exports.errorHandler = function errorHandler(error, _req, res, _next) {
  if (error.isBoom) {
    const {output} = error;
    res.status(output.statusCode).json(output.payload);
  } else {
    res.status(500).json({ message: 'Error found', error });
  }
}
