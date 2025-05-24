 
const mongoose = require('mongoose');

const qaSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String },
  askedBy: { type: String },
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('QA', qaSchema);