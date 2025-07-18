require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Import routes (to be created)
app.use('/colleges', require('./routes/colleges'));
app.use('/programs', require('./routes/programs'));
app.use('/gallery', require('./routes/gallery'));
app.use('/recruiters', require('./routes/recruiters'));
app.use('/rankings', require('./routes/rankings'));
app.use('/admissions', require('./routes/admissions'));
app.use('/fees', require('./routes/fees'));
app.use('/overview', require('./routes/overview'));
app.use('/cutoff', require('./routes/cutoff'));
app.use('/seatmatrix', require('./routes/seatmatrix'));
app.use('/placement', require('./routes/placement'));
app.use('/location', require('./routes/location'));
app.use('/hero', require('./routes/hero'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 