const { createJwt } = require('../helpers/jwt');
const Users = require('../models/users');

const bcrypt = require('bcrypt');

class authControllers {
  static async registerUser(document) {
    const existingUser = await Users.findOne({ $or: [{ email: document.email }, { username: document.username }] }).lean()
    if (existingUser) {
      throw new Error("User Already Exist!!")
    }
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(document.password, salt)
    document.password = hash
    const user = await Users.create(document)
    return user
  };

  static async loginUser(document) {
    const user = await Users.findOne({ username: document.username }, 'password').lean()
    if (!user) {
      throw new Error('user not found')
    }
    if (!bcrypt.compareSync(document.password, user.password)) {
      throw new Error('password not matched')
    }
    const token = createJwt({ id: user._id })
    return token
  };

};

module.exports = authControllers;