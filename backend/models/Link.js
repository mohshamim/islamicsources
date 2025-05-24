 
const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  category: { type: String, required: true }, // e.g., "Quran", "Hadith"
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Link', linkSchema);