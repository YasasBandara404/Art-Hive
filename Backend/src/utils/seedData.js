const Product = require('../models/Product');
const Category = require('../models/Category');
const mongoose = require('mongoose');
const slugify = require('slugify');

// Utility function to seed initial data
const seedData = async () => {
  try {
    // Remove any existing products with null slugs that might cause problems
    await Product.deleteMany({ slug: null });

    // Check if we already have products
    const productCount = await Product.countDocuments();
    
    if (productCount > 0) {
      console.log('Products already exist. Skipping seed.');
      return;
    }
    
    // Get categories - we need them to reference in products
    const categories = await Category.find({});
    
    if (categories.length === 0) {
      console.log('No categories found. Please create categories first.');
      return;
    }
    
    // Map categories by name for easy lookup
    const categoryMap = {};
    categories.forEach(cat => {
      categoryMap[cat.name.toLowerCase()] = cat._id;
    });
    
    // Sample products to create
    const productsData = [
      {
        name: 'Digital Landscape Art',
        slug: 'digital-landscape-art',
        description: 'Beautiful digital landscape artwork',
        price: 99.99,
        category: categoryMap['digital art'] || categories[0]._id,
        stock: 10,
        images: ['/uploads/sample-image-1.jpg']
      },
      {
        name: 'Abstract Wall Art',
        slug: 'abstract-wall-art',
        description: 'Modern abstract wall art',
        price: 149.99,
        category: categoryMap['wall arts'] || categories[0]._id,
        stock: 5,
        images: ['/uploads/sample-image-2.jpg']
      },
      {
        name: 'Anime Character Illustration',
        slug: 'anime-character-illustration',
        description: 'Detailed anime character illustration',
        price: 79.99,
        category: categoryMap['anime arts'] || categories[0]._id,
        stock: 20,
        images: ['/uploads/sample-image-3.jpg']
      }
    ];
    
    console.log('Seeding products...');
    
    // Create products one by one to ensure proper slug generation
    for (const productData of productsData) {
      // Ensure slug is set
      if (!productData.slug) {
        productData.slug = slugify(productData.name, { lower: true, strict: true });
      }
      
      await Product.create(productData);
    }
    
    console.log('Products seeded successfully!');
    
    // Log created products with their slugs
    const createdProducts = await Product.find({}, 'name slug');
    console.log('Created products:', createdProducts);
    
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

module.exports = { seedData };