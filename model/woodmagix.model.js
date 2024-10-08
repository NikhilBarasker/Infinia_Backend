const mongoose = require('mongoose');

// Sub-point schema
const subPointSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  }
});


const pointSchema = new mongoose.Schema({
  point: {
    type: String,
    required: true
  },
  subPoints: [subPointSchema]  
});

// Description schema with points that have sub-points
const descriptionSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true
  },
  points: [pointSchema]  // Points are an array of pointSchema
});

// Main Woodmagix schema
const woodmagixSchema = new mongoose.Schema({
  bgimage: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  title2: {
    type: String
  },
<<<<<<< HEAD
  para: description,
  info: description,
  images: [{ type: String }],
=======
  para: descriptionSchema,  // Para with subpoints and main points
  info: descriptionSchema,  // Info with subpoints and main points
  images: [{
    type: String,
    required: true
  }]
>>>>>>> df1b5baf362c31eb351d6d49962450c2b5714702
});

const WoodmagixModel = mongoose.model('woodmagix', woodmagixSchema);

module.exports = { WoodmagixModel };
