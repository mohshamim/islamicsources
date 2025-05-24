const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow frontend requests
app.use(express.json()); // Parse JSON requests

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Islamic Website API!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});