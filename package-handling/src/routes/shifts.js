const express = require('express');
const router = express.Router();
const Shift = require('../models/Shift'); // Import the Shift model

// Add a new shift
router.post('/', async (req, res) => {
  const shift = new Shift(req.body);
  try {
    await shift.save();
    res.status(201).send(shift);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Remove a shift by ID
router.delete('/:id', async (req, res) => {
  try {
    const shift = await Shift.findByIdAndDelete(req.params.id);
    if (!shift) return res.status(404).send('Shift not found');
    res.send(shift);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Update a shift by ID
router.put('/:id', async (req, res) => {
  try {
    const shift = await Shift.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!shift) return res.status(404).send('Shift not found');
    res.send(shift);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Get all shifts
router.get('/', async (req, res) => {
  try {
    const shifts = await Shift.find();
    res.send(shifts);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
