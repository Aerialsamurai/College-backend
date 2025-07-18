const mongoose = require('mongoose');

const FeeSchema = new mongoose.Schema({
  program: String,
  tuition: String,
  hostel: String,
  misc: String,
  total: String
});

module.exports = mongoose.model('Fee', FeeSchema); 