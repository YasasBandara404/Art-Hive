const Contact = require('../models/Contact');
const asyncHandler = require('express-async-handler');

// @desc    Create new contact message
// @route   POST /api/contact
// @access  Public
const createContactMessage = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create contact message
  const contact = await Contact.create({
    name,
    email,
    subject,
    message,
    user: req.user ? req.user._id : null
  });

  res.status(201).json({
    success: true,
    message: 'Message sent successfully',
    data: contact
  });
});

// @desc    Get all contact messages
// @route   GET /api/contact
// @access  Private/Admin
const getContactMessages = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.page) || 1;

  const count = await Contact.countDocuments({});
  const messages = await Contact.find({})
    .sort('-createdAt')
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .populate('user', 'name email');

  res.json({
    messages,
    page,
    pages: Math.ceil(count / pageSize),
    total: count
  });
});

// @desc    Update contact message status
// @route   PUT /api/contact/:id
// @access  Private/Admin
const updateContactStatus = asyncHandler(async (req, res) => {
  const { status, reply } = req.body;

  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error('Message not found');
  }

  contact.status = status;
  if (reply !== undefined) {
    contact.reply = reply;
  }
  const updatedContact = await contact.save();

  res.json(updatedContact);
});

module.exports = {
  createContactMessage,
  getContactMessages,
  updateContactStatus
};