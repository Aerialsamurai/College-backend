const express = require('express');
const router = express.Router();
const Ranking = require('../models/Ranking');

router.get('/', async (req, res) => {
  try {
    const rankings = await Ranking.find();
    res.json({ rankings });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch rankings data' });
  }
});

module.exports = router; 