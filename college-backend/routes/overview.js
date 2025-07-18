const express = require('express');
const router = express.Router();
const Overview = require('../models/Overview');

router.get('/', async (req, res) => {
  try {
    const overview = await Overview.findOne();
    res.json(overview);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch overview data' });
  }
});

module.exports = router; 