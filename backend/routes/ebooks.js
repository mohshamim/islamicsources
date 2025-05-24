 
const express = require('express');
const router = express.Router();
const Ebook = require('../models/Ebook');

// Get all eBooks
router.get('/', async (req, res) => {
  try {
    const ebooks = await Ebook.find();
    res.json(ebooks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create an eBook
router.post('/', async (req, res) => {
  const ebook = new Ebook({
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    fileUrl: req.body.fileUrl,
  });
  try {
    const newEbook = await ebook.save();
    res.status(201).json(newEbook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;