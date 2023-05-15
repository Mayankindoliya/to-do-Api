require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());


const mongoose = require('mongoose');
// Database & server connection
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

