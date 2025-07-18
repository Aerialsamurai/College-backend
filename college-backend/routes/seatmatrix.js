const express = require('express');
const router = express.Router();
const Seatmatrix = require('../models/Seatmatrix');

router.get('/', async (req, res) => {
  try {
    const branches = await Seatmatrix.find();
    // For officialSeatMatrixLinks, you may want to fetch from another collection or add logic here
    res.json({ branches, officialSeatMatrixLinks: [] });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch seat matrix data' });
  }
});

module.exports = router; 