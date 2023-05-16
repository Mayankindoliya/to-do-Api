const jwt = require('jsonwebtoken')

function createJwt(payload) {
const Jwttoken = jwt.sign(payload, process.env.JWT_SECRETKEY, {expiresIn: "1 day"})
return Jwttoken
};




module.exports = {
  createJwt,
};

