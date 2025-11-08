// server/middleware/performance.js
module.exports = function performanceMiddleware(req, res, next) {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    // keep console for dev; send to logger in prod
    console.log(`⏱ ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
  });
  next();
};
