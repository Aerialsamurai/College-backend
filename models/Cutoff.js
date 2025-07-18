const mongoose = require('mongoose');

const CutoffSchema = new mongoose.Schema({
  round: Number,
  data: [
    {
      branch: String,
      category: String,
      quota: String,
      openingRank: Number,
      closingRank: Number
    }
  ]
});

module.exports = mongoose.model('Cutoff', CutoffSchema); 