/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email format
 */
const isValidEmail = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {boolean} True if password meets requirements
 */
const isStrongPassword = (password) => {
  // At least 6 characters
  return password.length >= 6;
};

/**
 * Validate mongo ID format
 * @param {string} id - ID to validate
 * @returns {boolean} True if valid MongoDB ObjectId format
 */
const isValidMongoId = (id) => {
  const mongoIdRegex = /^[0-9a-fA-F]{24}$/;
  return mongoIdRegex.test(id);
};

/**
 * Validate that required fields are present
 * @param {object} body - Request body
 * @param {array} fields - Array of required field names
 * @returns {object} Object with isValid boolean and missing fields array
 */
const validateRequiredFields = (body, fields) => {
  const missingFields = fields.filter(field => !body[field]);
  return {
    isValid: missingFields.length === 0,
    missingFields
  };
};

module.exports = {
  isValidEmail,
  isStrongPassword,
  isValidMongoId,
  validateRequiredFields
};