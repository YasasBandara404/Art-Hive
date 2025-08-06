const express = require('express');
const router = express.Router();
const { 
  createContactMessage, 
  getContactMessages, 
  updateContactStatus 
} = require('../controllers/contactController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .post(createContactMessage)
  .get(protect, admin, getContactMessages);

router.route('/:id')
  .put(protect, admin, updateContactStatus);

module.exports = router;