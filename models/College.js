const mongoose = require('mongoose');

const CollegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  description: String,
  location: String,
  programs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Program' }],
  rankings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ranking' }],
  fees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Fee' }],
  placements: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Placement' }],
  gallery: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Gallery' }],
  testimonials: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Testimonial' }],
  recruiters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recruiter' }],
  admissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Admission' }],
});

module.exports = mongoose.model('College', CollegeSchema); 