const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tasksSchema = new Schema(
  {
    taskname: { type: String, required: true },
    description: String,
    user: {
      id: { type: Schema.Types.ObjectId, required: true },
      name: String
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);


module.exports = mongoose.model('tasks', tasksSchema);