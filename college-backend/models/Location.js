const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  airports: [
    {
      name: String,
      distance: String
    }
  ],
  stations: [
    {
      name: String,
      distance: String
    }
  ],
  facilities: [
    {
      icon: String,
      label: String
    }
  ],
  contact: {
    email: String,
    phone: String,
    address: String,
    website: String
  },
  mapEmbedUrl: String
});

module.exports = mongoose.model('Location', LocationSchema); 