require('dotenv').config();

const express = require('express');
const app = express();

const router = require('./routes')

app.use(express.json());
app.use(router);

// error handlers:
app.use((err, req, res, next) => {
  console.log(err)
  res.json({ "message": err.message, "stack": err.stack })
});


const mongoose = require('mongoose');
// Database & server connection:
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("database is connected (())")
    app.listen(3000, () => {
      console.log("server connected ((())")
    })
  })
  .catch((err) => {
    console.log(err)
  })

