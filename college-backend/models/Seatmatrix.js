const mongoose = require('mongoose');

const SeatmatrixSchema = new mongoose.Schema({
  branch: String,
  category: String,
  gender: String,
  seats: Number
});

module.exports = mongoose.model('Seatmatrix', SeatmatrixSchema); 