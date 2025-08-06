const Testimonial = require('../models/Testimonial');
const asyncHandler = require('express-async-handler');

// @desc    Get all testimonials
// @route   GET /api/testimonials
// @access  Public
const getTestimonials = asyncHandler(async (req, res) => {
  const testimonials = await Testimonial.find({}).sort('-createdAt');
  res.json({ testimonials });
});

// @desc    Create a testimonial
// @route   POST /api/testimonials
// @access  Private/Admin
const createTestimonial = asyncHandler(async (req, res) => {
  const { author, role, avatar, content } = req.body;
  const testimonial = new Testimonial({ author, role, avatar, content });
  await testimonial.save();
  res.status(201).json(testimonial);
});

// @desc    Delete a testimonial
// @route   DELETE /api/testimonials/:id
// @access  Private/Admin
const deleteTestimonial = asyncHandler(async (req, res) => {
  const testimonial = await Testimonial.findById(req.params.id);
  if (!testimonial) {
    res.status(404);
    throw new Error('Testimonial not found');
  }
  await testimonial.deleteOne();
  res.json({ message: 'Testimonial removed' });
});

module.exports = {
  getTestimonials,
  createTestimonial,
  deleteTestimonial
};