const { formatDate } = require('../utils/datetimes')
const { legthBytes } = require('../utils/legth.bytes')

function formatResponse(req, res, message, status, statusError, details) {
  let statusCode = status;
  let statusMessage = message;

  if (details) {
    // eslint-disable-next-line no-console
    console.log(details);
  }

  res.status(status).send({
      Error: statusError,
      ResponseMetadata: {
        HTTPHeaders: {
          'content-length': legthBytes(statusMessage),
          'content-type': 'application/json',
          'date': formatDate(),
        },
        HTTPStatusCode: statusCode,
      },
      Body: statusMessage
  });
}

exports.success = function (req, res, message, status) {
  let messageResponse = message || '';
  let statusCode = status || 200;
  formatResponse(req, res, messageResponse, statusCode, false)
}

exports.error = function (req, res, message, status, details) {
  console.log(message);
  let messageResponse = message || 'Internal server error';
  let statusCode = status || 500;
  let detailsConsole = details || '';
  formatResponse(req, res, messageResponse, statusCode, true, detailsConsole)
}
