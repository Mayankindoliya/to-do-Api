const jwt = require('jsonwebtoken')

function createJwt(payload) {
const Jwttoken = jwt.sign(payload, process.env.JWT_SECRETKEY, {expiresIn: "1 day"})
return Jwttoken
};

function verifyJwt(token){
 return  jwt.verify(token, process.env.JWT_SECRETKEY)
}


module.exports = {
  createJwt,
  verifyJwt
};

