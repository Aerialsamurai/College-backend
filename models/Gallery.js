const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
  image: String,
  caption: String,
  college: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
});

module.exports = mongoose.model('Gallery', GallerySchema); 