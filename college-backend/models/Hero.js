const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
  title: String,
  subtitle: String
});

module.exports = mongoose.model('Hero', HeroSchema); 