const Product = require('../models/Product');
const Order = require('../models/Order');
const User = require('../models/User');
const asyncHandler = require('express-async-handler');

// @desc    Get dashboard statistics
// @route   GET /api/admin/stats
// @access  Private/Admin
const getDashboardStats = asyncHandler(async (req, res) => {
  const productCount = await Product.countDocuments();
  const orderCount = await Order.countDocuments();
  const userCount = await User.countDocuments();
  
  // Calculate total sales
  const orders = await Order.find({ status: 'completed' });
  const totalSales = orders.reduce((sum, order) => sum + order.totalPrice, 0);
  
  res.json({
    productCount,
    orderCount,
    userCount,
    totalSales
  });
});

// @desc    Get all products for admin
// @route   GET /api/admin/products
// @access  Private/Admin
const getAdminProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
    .populate('category', 'name')
    .sort('-createdAt');
  
  res.json(products);
});

// @desc    Get all orders for admin
// @route   GET /api/admin/orders
// @access  Private/Admin
const getAdminOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({})
    .populate('user', 'name email')
    .sort('-createdAt');
  
  res.json(orders);
});

module.exports = {
  getDashboardStats,
  getAdminProducts,
  getAdminOrders
};