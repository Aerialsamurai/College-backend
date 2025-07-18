const express = require('express');
const router = express.Router();
const Cutoff = require('../models/Cutoff');

router.get('/', async (req, res) => {
  try {
    const rounds = await Cutoff.find();
    res.json({ rounds });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cutoff data' });
  }
});

module.exports = router; 