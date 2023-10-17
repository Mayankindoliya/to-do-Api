const Users = require('../models/users');

const jwt = require('../helpers/jwt');

const bcrypt = require('bcrypt');

class authControllers {
  static async registerUser(document) {
    // Check if a user with the same email or full name already exists
    const existingUser = await Users.findOne({ $or: [{ email: document.email }, { username: document.username }] }).lean()
    if (existingUser) {
      throw new Error("User Already Exist!!")
    }
    // Generate a salt and hash the user's password with bcrypt
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
    const token = jwt.createJwt({ id: user._id })
    return token
  };

};

module.exports = authControllers;