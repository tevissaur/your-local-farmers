import mongoose from 'mongoose';
require('dotenv').config()

// Add process.env.MONGODB_URI ||  when deploying
const uri = process.env.NODE_ENV === "production"
? process.env.MONGODB_URI
: process.env.LOCAL_URI


mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

export const db = mongoose.connection;

