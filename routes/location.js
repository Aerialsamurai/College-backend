const express = require('express');
const router = express.Router();
const Location = require('../models/Location');

router.get('/', async (req, res) => {
  try {
    const location = await Location.findOne();
    res.json(location);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch location data' });
  }
});

module.exports = router; 