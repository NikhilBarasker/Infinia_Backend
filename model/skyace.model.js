const mongoose = require('mongoose');

// Define the schema for properties (features)
const PropertySchema = mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  }
});

// Define the main schema for Skyace
const SkyaceSchema = mongoose.Schema({
  title: {
    type: String
  },
  title2: {
    type: String
  },
  backgroundImage: {
    type: String
  },
  heading: {
    type: String
  },
<<<<<<< HEAD
  brochure: {
    type:String
=======
  // brochure: {
  //   type: String
  // },
  info: {
    para: {
      type: String
    },
    properties: [PropertySchema] // Use PropertySchema for properties
>>>>>>> df1b5baf362c31eb351d6d49962450c2b5714702
  },
  images: {
    type: [String] // Array of image URLs
  }
});

// Create the model from the schema
const SkyaceModel = mongoose.model("Skyace", SkyaceSchema);

<<<<<<< HEAD
const SkyaceModel = mongoose.model("skyace", skyaceSchema);
=======
>>>>>>> df1b5baf362c31eb351d6d49962450c2b5714702
module.exports = {
  SkyaceModel
};
