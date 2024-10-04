

const mongoose = require('mongoose');

const descriptionSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true 
  },
  points: [
    {
      type: String  
    }
  ]
});

const claymagixSchema = new mongoose.Schema({
  bgimage: {
    type: String, 
  },
  title: {
    type: String,
    required: true  
  },
  title2: {
    type: String  
  },
  para: {
    type: String,
    required: true  
  },
<<<<<<< HEAD
  info:[description],
=======
  info: [descriptionSchema],  
>>>>>>> df1b5baf362c31eb351d6d49962450c2b5714702
  images: [
    {
      type: String,
      required: true 
    }
  ]
});


const ClaymagixModel = mongoose.model("Claymagix", claymagixSchema);

module.exports = ClaymagixModel;
