const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    role: { type: String },
    avatar: { type: String },
    content: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Testimonial', testimonialSchema);