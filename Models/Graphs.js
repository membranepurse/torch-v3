const mongoose = require('mongoose');

// Create Schema
const GraphSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  readmin: {
    type: Number
  },
  patFall: {
    type: Number
  },
  medErr: {
    type: Number
  },
  recommend: {
    type: Number
  },
  admin: {
    type: Number
  },
  avgDailyCensus: {
    type: Number
  },
  avgLOS: {
    type: Number
  },
  labor: {
    type: Number
  },
  margin: {
    type: Number
  },
  netRev: {
    type: Number
  },
  currRatio: {
    type: Number
  },
  debtCap: {
    type: Number
  }
});

module.exports = Graphs = mongoose.model('graphs', GraphSchema);
