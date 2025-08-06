const express = require('express');
const router = express.Router();
const {
  getTestimonials,
  createTestimonial,
  deleteTestimonial
} = require('../controllers/testimonialController');
const { protect, admin } = require('../middleware/authMiddleware');

// Public
router.get('/', getTestimonials);

// Admin
router.post('/', protect, admin, createTestimonial);
router.delete('/:id', protect, admin, deleteTestimonial);

module.exports = router;