// server/middleware/errorHandler.js
const logger = require('./logger');

function errorHandler(err, req, res, next) {
  // Normalize error information
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  // log full stack on server logs
  logger.error(message, { status, stack: err.stack });

  // send safe response to client
  res.status(status).json({
    success: false,
    message,
  });
}

module.exports = errorHandler;
