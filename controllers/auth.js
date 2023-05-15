const User = require('../models/users');

const bcrypt = require('bcrypt');

class authControllers {
  static async registerUser(document){
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(document.password, salt)
    document.password = hash
  const user =  await User.create(document)
  return user
  }
}

module.exports = authControllers;