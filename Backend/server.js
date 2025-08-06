const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// Load environment variables
dotenv.config();
require('dotenv').config(); // Load variables from .env

const jwtSecret = process.env.JWT_SECRET;
// console.log("JWT Secret Key:", jwtSecret);
// console.log("MongoDB URI:", process.env.MONGODB_URI);
// console.log("Node Environment:", process.env.NODE_ENV);
// console.log("Port:", process.env.PORT);
// console.log("JWT Expiration:", process.env.JWT_EXPIRE);

// Import routes
const authRoutes = require('./src/routes/authRoutes');
const productRoutes = require('./src/routes/productRoutes');
const categoryRoutes = require('./src/routes/categoryRoutes');
const userRoutes = require('./src/routes/userRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const cartRoutes = require('./src/routes/cartRoutes');
const orderRoutes = require('./src/routes/orderRoutes');
const contactRoutes = require('./src/routes/contactRoutes');

// Import middleware
const { errorHandler } = require('./src/middleware/errorMiddleware');

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
require('./src/config/db');

// Custom request logger middleware
app.use((req, res, next) => {
  const start = Date.now();
  
  // Once the request is processed and a response is sent
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - Status: ${res.statusCode} - ${duration}ms`);
  });
  
  next();
});

// Middleware
app.use(cors({
  origin: function(origin, callback) {
    // Allow any origin
    callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder for uploads
app.use('/uploads', express.static(path.join(__dirname, 'src/uploads')));

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'src/uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log('Created uploads directory at:', uploadsDir);
}

// Routes
console.log("Loading auth routes...");
app.use('/api/auth', authRoutes);

console.log("Loading product routes...");
app.use('/api/products', productRoutes);

console.log("Loading category routes...");
app.use('/api/categories', categoryRoutes);

app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/testimonials', require('./src/routes/testimonialRoutes'));

// Base route for API health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

// Debug route to fetch product and category slugs
app.get('/api/debug/products', async (req, res) => {
  try {
    const products = await mongoose.model('Product').find({}, 'name slug category');
    const categories = await mongoose.model('Category').find({}, 'name slug');
    res.json({
      products,
      categories,
      productCount: products.length,
      categoryCount: categories.length
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Error handling middleware
app.use(errorHandler);

// Add this after MongoDB connection
const { seedData } = require('./src/utils/seedData');

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api/health`);
  
  // Seed data if needed
  seedData().catch(err => {
    console.error('Error during data seeding:', err);
  });
});

