const Users = require('../models/users');
const jwt = require('./jwt');

async function authenticationMiddleware(req, res, next) {
  const authHeader = req.headers.authorization
  try {
    // verify the Token
    if (authHeader) {
      const token = authHeader.split(' ')[1]
      const payload = jwt.verifyJwt(token)
      const user = await Users.findOne({ _id: payload.id }, 'name email address').lean()
      console.log("user", user)
      user.id = user._id
      req.user = user
    }
    next();
  }
  catch(err) {
    console.log('error during authentication')
    next(err)
  }

};

function errorHandlersMiddleware(err, req, res, next) {
  console.log(err)
 res.json({"message":err.message, "stack": err.stack})
} 


module.exports = {
  authenticationMiddleware,
  errorHandlersMiddleware
}