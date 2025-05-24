 
const mongoose = require('mongoose');

const ebookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true }, // e.g., "Tafsir", "Hadith"
  fileUrl: { type: String, required: true }, // URL to PDF in Firebase Storage
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Ebook', ebookSchema);