// CHAMA COMPUTERS\Downloads\yass last\create-sphere-market\Backend\src\models\Category.js
const mongoose = require('mongoose');
const slugify = require('slugify');

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category name is required'],
    unique: true,
    trim: true
  },
  slug: {
    type: String,
    unique: true
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

// Create slug from the name
categorySchema.pre('save', function(next) {
  if (this.isModified('name')) {
    this.slug = slugify(this.name, { lower: true });
  }
  next();
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;