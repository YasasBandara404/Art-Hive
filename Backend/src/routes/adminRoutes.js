const express = require('express');
const router = express.Router();
const { 
  getDashboardStats,
  getAdminProducts,
  getAdminOrders
} = require('../controllers/adminController');
const { protect, admin } = require('../middleware/authMiddleware');

router.get('/stats', protect, admin, getDashboardStats);
router.get('/products', protect, admin, getAdminProducts);
router.get('/orders', protect, admin, getAdminOrders);

module.exports = router;