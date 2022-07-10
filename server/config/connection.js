const mongoose = require('mongoose');
require('dotenv').config()

// Add process.env.MONGODB_URI ||  when deploying

mongoose.connect(process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : "mongodb://localhost/yourlocalfarmersdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
