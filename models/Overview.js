const mongoose = require('mongoose');

const OverviewSchema = new mongoose.Schema({
  facts: [{ label: String, value: String }],
  paragraphs: [String]
});

module.exports = mongoose.model('Overview', OverviewSchema); 