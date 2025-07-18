const mongoose = require('mongoose');

const RecruiterSchema = new mongoose.Schema({
  name: String,
  logo: String,
});

module.exports = mongoose.model('Recruiter', RecruiterSchema); 