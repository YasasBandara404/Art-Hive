const crypto = require('crypto');

/**
 * Generate a random token
 * @returns {string} Random hex string
 */
const generateRandomToken = () => {
  return crypto.randomBytes(20).toString('hex');
};

/**
 * Format error response
 * @param {string} message - Error message
 * @param {number} statusCode - HTTP status code
 * @returns {object} Formatted error object
 */
const formatError = (message, statusCode = 500) => {
  return {
    success: false,
    error: message,
    statusCode
  };
};

/**
 * Format success response
 * @param {any} data - Response data
 * @param {string} message - Success message
 * @returns {object} Formatted success object
 */
const formatSuccess = (data, message = 'Success') => {
  return {
    success: true,
    message,
    data
  };
};

/**
 * Calculate total price from cart items
 * @param {array} items - Cart items with product and quantity
 * @param {array} products - Product details
 * @returns {number} Total price
 */
const calculateTotalPrice = (items, products) => {
  return items.reduce((total, item) => {
    const product = products.find(p => p._id.toString() === item.product.toString());
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
};

module.exports = {
  generateRandomToken,
  formatError,
  formatSuccess,
  calculateTotalPrice
};