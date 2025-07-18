const express = require('express');
const router = express.Router();
const Placement = require('../models/Placement');

router.get('/', async (req, res) => {
  try {
    const placements = await Placement.find();
    // Return as an object with years as keys if needed by frontend
    const placementData = {};
    placements.forEach(p => {
      placementData[p.year] = p;
    });
    res.json(placementData);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch placement data' });
  }
});

module.exports = router; 