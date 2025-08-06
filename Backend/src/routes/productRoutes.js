const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductBySlug,
  createProduct,
  updateProduct,
  deleteProduct,
  getTopProducts,
  createProductReview,
  getTrendingProducts
} = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');
const { uploadProductImage } = require('../middleware/uploadMiddleware');

// Public routes
router.get('/', getProducts);
router.get('/top', getTopProducts);
router.get('/trending', getTrendingProducts);
router.get('/:slug', getProductBySlug);

// Protected routes
router.post('/:id/reviews', protect, createProductReview);

// Admin routes
router.post('/', protect, admin, uploadProductImage, createProduct);
router.put('/:id', protect, admin, uploadProductImage, updateProduct);
router.delete('/:id', protect, admin, deleteProduct);

module.exports = router;