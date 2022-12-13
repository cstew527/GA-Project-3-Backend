const mongoose = require ('mongoose');

const mediaSchema = new mongoose.Schema({

    postName: {
        type: String,
        minLength: 3
    },

    comment: {
        type: String,
        minLength:[
            4,
            'Please create a comment'
        ]
    },

    date:{
        type: String,
        required: true
    },

    rating: {
        type: Number,
        minLength: 0,
        maxLength: 5,
      },

      lat: {
        type: Number,
      },

      long: {
        type: Number,
      },

      username: {
        type: String,
      },

}, {timestamps: true})

const Media = mongoose.model('Media', mediaSchema);
module.exports = Media
