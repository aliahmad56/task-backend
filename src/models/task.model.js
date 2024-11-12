const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },

  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    required: true
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  dueDate: {
    type: Date
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
