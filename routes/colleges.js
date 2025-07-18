const express = require('express');
const router = express.Router();
const College = require('../models/College');

// GET all colleges
router.get('/', async (req, res) => {
  try {
    const colleges = await College.find()
      .populate('programs')
      .populate('rankings')
      .populate('fees')
      .populate('placements')
      .populate('gallery')
      .populate('testimonials')
      .populate('recruiters')
      .populate('admissions');
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET college by ID
router.get('/:id', async (req, res) => {
  try {
    const college = await College.findById(req.params.id)
      .populate('programs')
      .populate('rankings')
      .populate('fees')
      .populate('placements')
      .populate('gallery')
      .populate('testimonials')
      .populate('recruiters')
      .populate('admissions');
    if (!college) return res.status(404).json({ error: 'College not found' });
    res.json(college);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create college
router.post('/', async (req, res) => {
  try {
    const college = new College(req.body);
    await college.save();
    res.status(201).json(college);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update college
router.put('/:id', async (req, res) => {
  try {
    const college = await College.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!college) return res.status(404).json({ error: 'College not found' });
    res.json(college);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE college
router.delete('/:id', async (req, res) => {
  try {
    const college = await College.findByIdAndDelete(req.params.id);
    if (!college) return res.status(404).json({ error: 'College not found' });
    res.json({ message: 'College deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 