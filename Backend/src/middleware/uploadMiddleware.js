//  COMPUTERS\Downloads\yass last\create-sphere-market\Backend\src\middleware\uploadMiddleware.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    // Create unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExt = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + fileExt);
  }
});

// File filter function with more permissive rules
const fileFilter = (req, file, cb) => {
  // Accept all files for now to help with debugging
  return cb(null, true);
};

// Export multer instance
const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 500 * 1024 * 1024 } // 500MB size limit
});

module.exports = {
  uploadProductImage: upload.fields([
    { name: 'images', maxCount: 5 },
    { name: 'file', maxCount: 1 }
  ])
};