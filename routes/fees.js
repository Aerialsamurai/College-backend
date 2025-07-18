const express = require('express');
const router = express.Router();
const Fee = require('../models/Fee');

router.get('/', async (req, res) => {
  try {
    const fees = await Fee.find();
    res.json({ fees });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch fees data' });
  }
});

module.exports = router; 