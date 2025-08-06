// d/controllers/productController.js
const Product = require('../models/Product');
const Category = require('../models/Category');
const asyncHandler = require('express-async-handler');

// @desc    Get all products with filters, pagination, and sorting
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.page) || 1;
  
  // Build query
  const keyword = req.query.keyword 
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i'
        }
      } 
    : {};

  // Category filtering
  if (req.query.category) {
    const category = await Category.findOne({ slug: req.query.category });
    if (category) {
      keyword.category = category._id;
    }
  }

  // Price filtering
  if (req.query.minPrice || req.query.maxPrice) {
    keyword.price = {};
    if (req.query.minPrice) keyword.price.$gte = Number(req.query.minPrice);
    if (req.query.maxPrice) keyword.price.$lte = Number(req.query.maxPrice);
  }

  // Count total products
  const count = await Product.countDocuments({ ...keyword });
  
  // Sort options
  let sortOption = { createdAt: -1 };
  if (req.query.sort) {
    switch (req.query.sort) {
      case 'price_asc':
        sortOption = { price: 1 };
        break;
      case 'price_desc':
        sortOption = { price: -1 };
        break;
      case 'newest':
        sortOption = { createdAt: -1 };
        break;
      case 'name_asc':
        sortOption = { name: 1 };
        break;
    }
  }

  // Fetch products with pagination and sorting
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort(sortOption)
    .populate('category', 'name slug');

  res.json({ 
    products, 
    page, 
    pages: Math.ceil(count / pageSize),
    total: count
  });
});

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
    .sort({ price: -1 })
    .limit(6)
    .populate('category', 'name slug');
  
  res.json(products);
});

// @desc    Get trending products (by most reviews)
// @route   GET /api/products/trending
// @access  Public
const getTrendingProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
    .sort({ numReviews: -1, rating: -1 })
    .limit(8)
    .populate('category', 'name slug');
  res.json({ products });
});

// @desc    Get product by slug
// @route   GET /api/products/:slug
// @access  Public
const getProductBySlug = asyncHandler(async (req, res) => {
  // Try find by slug
  const product = await Product.findOne({ slug: req.params.slug })
    .populate('category', 'name slug');
  
  if (product) {
    res.json(product);
  } else {
    // Log additional information for debugging
    console.log(`Product with slug '${req.params.slug}' not found`);
    const count = await Product.countDocuments({});
    console.log(`Total products in database: ${count}`);
    
    // Display available slugs
    if (count > 0) {
      const productSlugs = await Product.find({}, 'name slug').limit(10);
      console.log(`Available products (up to 10): ${JSON.stringify(productSlugs)}`);
    }
    
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  try {
    console.log('Create product request received:', req.body);
    
    // Log file information
    if (req.files) {
      console.log('Files received:', Object.keys(req.files));
      if (req.files.images) {
        console.log('Image files:', req.files.images.map(f => f.filename));
      }
      if (req.files.file) {
        console.log('Digital file:', req.files.file.map(f => f.filename));
      }
    }
    
    // Extract data from the request body
    const { name, price, description, category, stock, tags } = req.body;
    
    // Validate required fields
    if (!name || !price || !description || !category) {
      res.status(400);
      throw new Error('Please fill in all required fields');
    }
    
    // Process image paths
    let images = [];
    if (req.files && req.files.images) {
      images = req.files.images.map(file => `/uploads/${file.filename}`);
    }
    
    // Process digital file path
    let digitalFile = null;
    if (req.files && req.files.file) {
      digitalFile = `/uploads/${req.files.file[0].filename}`;
    }
    
    // Parse tags if provided as a JSON string
    let parsedTags = [];
    if (tags) {
      try {
        parsedTags = JSON.parse(tags);
      } catch (error) {
        console.error('Error parsing tags:', error);
      }
    }
    
    // Create a new product
    const product = new Product({
      name,
      price: Number(price),
      description,
      category,
      stock: Number(stock) || 0,
      images,
      digitalFile,
      tags: parsedTags,
      user: req.user._id
    });
    
    // Save the product to the database
    const createdProduct = await product.save();
    console.log('Product created:', createdProduct);
    
    // Return the created product
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error('Error in createProduct:', error);
    res.status(500).json({
      message: error.message || 'Server error in product creation',
      stack: process.env.NODE_ENV === 'production' ? null : error.stack
    });
  }
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, category, stock } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name || product.name;
    product.price = price !== undefined ? price : product.price;
    product.description = description || product.description;
    product.category = category || product.category;
    product.stock = stock !== undefined ? stock : product.stock;
    
    // Process uploaded images if any
    if (req.files && req.files.length > 0) {
      const newImages = req.files.map(file => `/${file.path.replace(/\\/g, '/')}`);
      
      // If there's a flag to replace all images or no existing images
      if (req.body.replaceAllImages === 'true' || !product.images.length) {
        product.images = newImages;
      } else {
        // Otherwise append new images
        product.images = [...product.images, ...newImages];
      }
    }

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.deleteOne();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Create product review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    // Add review
    const review = {
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      comment
    };

    product.reviews.push(review);
    
    // Update product rating
    product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;
    
    await product.save();
    res.status(201).json({ message: 'Review added' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

module.exports = {
  getProducts,
  getTopProducts,
  getTrendingProducts,
  getProductBySlug,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview
};