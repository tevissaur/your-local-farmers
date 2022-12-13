import mongoose from 'mongoose';
require('dotenv').config()

// Add process.env.MONGODB_URI ||  when deploying

mongoose.connect(process.env.MONGODB_URI ?? "mongodb://localhost/yourlocalfarmersdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

export default mongoose.connection;
