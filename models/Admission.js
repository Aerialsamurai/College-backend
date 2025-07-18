const mongoose = require('mongoose');

const AdmissionSchema = new mongoose.Schema({
  process: String,
  exams: [String],
  college: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
});

module.exports = mongoose.model('Admission', AdmissionSchema); 