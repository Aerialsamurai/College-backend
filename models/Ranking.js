const mongoose = require('mongoose');

const RankingSchema = new mongoose.Schema({
  title: String,
  sub: String,
  rank: String,
  image: String,
  className: String
});

module.exports = mongoose.model('Ranking', RankingSchema); 