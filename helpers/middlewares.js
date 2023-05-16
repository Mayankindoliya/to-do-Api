const Users = require('../models/users');

async function authenticationMiddleware(req, res, next) {
  const authHeader = req.headers.authorization
  // verify the Token
  if (authHeader) {
    const token = authHeader.split(' ')[1]
    const payload = jwt.verifyJwt(token)
    const user = await Users.findOne({ _id: payload.id }, 'name email address').lean()
    user.id = user._id
    req.user = user
  }
  next()
};


module.exports = {
  authenticationMiddleware
}