const jwt = require('jsonwebtoken');

/**
 * Generate a JWT token
 * @param {string} id - The user ID to encode in the token
 * @returns {string} JWT token
 */
const generateToken = (id) => {
  return jwt.sign(
    { id }, 
    process.env.JWT_SECRET || 'arthivesecret2024', 
    { expiresIn: process.env.JWT_EXPIRE || '30d' }
  );
};

/**
 * Verify a JWT token
 * @param {string} token - The token to verify
 * @returns {object} Decoded token payload
 */
const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET || 'arthivesecret2024');
};

module.exports = { generateToken, verifyToken };