const mongoose = require('mongoose');


const dataSchema = new mongoose.Schema({
    textData: {
        type:String,
        require:[true , 'please enter the text feiled']
    },
  });
  
  const countSchema = new mongoose.Schema({
    addCount: { type: Number, default: 0 },
    updateCount: { type: Number, default: 0 },
  });
  
  const Data = mongoose.model('Data', dataSchema);
  const Count = mongoose.model('Count', countSchema);
  
  module.exports = {Data , Count}