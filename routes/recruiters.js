const express = require('express');
const router = express.Router();
const Recruiter = require('../models/Recruiter');

// GET all recruiters
router.get('/', async (req, res) => {
  try {
    const recruiters = await Recruiter.find();
    res.json(recruiters);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET recruiter by ID
router.get('/:id', async (req, res) => {
  try {
    const recruiter = await Recruiter.findById(req.params.id);
    if (!recruiter) return res.status(404).json({ error: 'Recruiter not found' });
    res.json(recruiter);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create recruiter
router.post('/', async (req, res) => {
  try {
    const recruiter = new Recruiter(req.body);
    await recruiter.save();
    res.status(201).json(recruiter);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update recruiter
router.put('/:id', async (req, res) => {
  try {
    const recruiter = await Recruiter.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!recruiter) return res.status(404).json({ error: 'Recruiter not found' });
    res.json(recruiter);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE recruiter
router.delete('/:id', async (req, res) => {
  try {
    const recruiter = await Recruiter.findByIdAndDelete(req.params.id);
    if (!recruiter) return res.status(404).json({ error: 'Recruiter not found' });
    res.json({ message: 'Recruiter deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 