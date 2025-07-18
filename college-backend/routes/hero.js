const express = require('express');
const router = express.Router();
const Hero = require('../models/Hero');

router.get('/', async (req, res) => {
  try {
    const hero = await Hero.findOne();
    res.json(hero);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch hero data' });
  }
});

module.exports = router; 