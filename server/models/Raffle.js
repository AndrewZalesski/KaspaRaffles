const mongoose = require('mongoose');

const RaffleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  minimumEntry: {
    type: Number,
    required: true,
  },
  walletAddress: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'OPEN',
  },
});

module.exports = mongoose.model('Raffle', RaffleSchema);
