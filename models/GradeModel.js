const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    defalt: 0,
  },
});

module.exports = mongoose.model('grade', gradeSchema);
