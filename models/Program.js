const mongoose = require('mongoose');

const ProgramSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  icon: String,
});

module.exports = mongoose.model('Program', ProgramSchema); 