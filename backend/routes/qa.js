 
const express = require('express');
const router = express.Router();
const QA = require('../models/QA');

// Get all Q&A
router.get('/', async (req, res) => {
  try {
    const qas = await QA.find();
    res.json(qas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a question
router.post('/', async (req, res) => {
  const qa = new QA({
    question: req.body.question,
    askedBy: req.body.askedBy,
  });
  try {
    const newQA = await qa.save();
    res.status(201).json(newQA);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;