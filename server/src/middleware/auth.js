// simplistic auth middleware for example
function requireAuth(req, res, next) {
  if (!req.headers || !req.headers.authorization) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  // pretend to extract user
  req.user = { id: 'user1' };
  next();
}

module.exports = requireAuth;
