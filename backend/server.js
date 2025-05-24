const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const ebookRoutes = require('./routes/ebooks');
const articleRoutes = require('./routes/articles');
const qaRoutes = require('./routes/qa');
const linkRoutes = require('./routes/links');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/ebooks', ebookRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/qa', qaRoutes);
app.use('/api/links', linkRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Islamic Website API!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});