const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: String,
  email: String,
  fathersname: String,
  adress: String,
  dob: String,
  username: String,
  password: String
}, {
  timestamps:
  {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('users', usersSchema);