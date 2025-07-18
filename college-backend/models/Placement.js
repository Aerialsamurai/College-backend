const mongoose = require('mongoose');

const PlacementSchema = new mongoose.Schema({
  year: Number,
  chart: [
    {
      branch: String,
      Registered: Number,
      Placed: Number
    }
  ],
  percentage: [
    {
      branch: String,
      percentage: String
    }
  ],
  salary: {
    medianDomestic: String,
    averageDomestic: String,
    medianInternational: String,
    averageInternational: String
  }
});

module.exports = mongoose.model('Placement', PlacementSchema); 