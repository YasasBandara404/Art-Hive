const Order = require('../models/Order');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const asyncHandler = require('express-async-handler');

// @desc    Create new order from cart
// @route   POST /api/orders
// @access  Private
const createOrder = asyncHandler(async (req, res) => {
  const { paymentMethod } = req.body;

  // Get user's cart
  const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
  
  if (!cart || cart.items.length === 0) {
    res.status(400);
    throw new Error('No items in cart');
  }

  // Create order items from cart items
  const orderItems = cart.items.map(item => {
    return {
      product: item.product._id,
      quantity: item.quantity,
      price: item.product.price
    };
  });

  // Create the order
  const order = await Order.create({
    user: req.user._id,
    items: orderItems,
    totalPrice: cart.totalPrice,
    paymentMethod
  });

  // Clear the cart after creating the order
  cart.items = [];
  await cart.save();

  // Return the order details
  res.status(201).json(order);
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)
    .populate('user', 'name email')
    .populate({
      path: 'items.product',
      select: 'name images slug'
    });

  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }

  // Check if the order belongs to the logged in user or if user is admin
  if (order.user._id.toString() !== req.user._id.toString() && !req.user.isAdmin) {
    res.status(401);
    throw new Error('Not authorized');
  }

  res.json(order);
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
    .sort('-createdAt')
    .populate({
      path: 'items.product',
      select: 'name images slug'
    });
  
  res.json(orders);
});

// @desc    Update order status
// @route   PUT /api/orders/:id/status
// @access  Private/Admin
const updateOrderStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;

  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }

  order.status = status;
  
  if (status === 'completed') {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentStatus = 'completed';
    
    // Here, you would add logic to create download links for digital products
    order.downloadLinks = order.items.map(item => `/downloads/product_${item.product}`);
  }

  const updatedOrder = await order.save();

  res.json(updatedOrder);
});

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({})
    .populate('user', 'id name')
    .sort('-createdAt');
  
  res.json(orders);
});

module.exports = {
  createOrder,
  getOrderById,
  getMyOrders,
  updateOrderStatus,
  getOrders
};