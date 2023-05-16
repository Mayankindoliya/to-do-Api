const express = require('express');
const authControllers = require('../controllers/auth')

const router = express.Router();

router.post('/register', (req, res, next) => {
  authControllers.registerUser(req.body)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      next(err)
    })
});

router.post('/login', (req, res, next) => {
  authControllers.loginUser(req.body)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      next(err)
    })
});



module.exports = router;