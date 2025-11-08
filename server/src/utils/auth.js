// src/utils/auth.js
const jwt = require('jsonwebtoken');

function generateToken(userId) {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET || 'testsecret', {
    expiresIn: '1h',
  });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET || 'testsecret');
  } catch (error) {
    return null;
  }
}

module.exports = { generateToken, verifyToken };
