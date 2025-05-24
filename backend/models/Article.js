 
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true }, // e.g., "Fiqh", "Aqeedah"
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Article', articleSchema);