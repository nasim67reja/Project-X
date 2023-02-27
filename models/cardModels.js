const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'card must have a title'],
  },
  description: {
    type: String,
    required: [true, 'card must have a description'],
  },
  image: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Card = mongoose.model('User', cardSchema);

module.exports = Card;
