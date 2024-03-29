require('dotenv').config();

const express = require('express');
const app = express();

const router = require('./routes')
const middleware = require('./helpers/middlewares')

app.use(express.json());
app.use(middleware.authenticationMiddleware);
app.use(router);

// error handlers:
app.use(middleware.errorHandlersMiddleware);


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

