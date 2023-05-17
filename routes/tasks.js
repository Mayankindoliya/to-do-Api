const express = require('express')

const tasksContollers = require('../controllers/tasks')

const router = express.Router();

router.post('/createtasks', (req, res, next) => {
  tasksContollers.createTasks(req.body, req.user)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      next(err)
    })
});


module.exports = router;
