const response = require('../middlewares/response')
function logErrors (err, req, res, next) {
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  message = {
    message: err.message,
    stack: err.stack,
  }
  response.error(req, res, message, 500);
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    message = output.payload
    delete message.statusCode
    statusCode = output.statusCode;
    response.error(req, res, message, statusCode);
  }
  next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler }
