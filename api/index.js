import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGODBURL)
  .then(() => {
    console.log('MongoDB is connected!!');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log('server is running on port 3000');
});

// mongodb+srv://<username>:<password>@mern-cluster.vawf1hp.mongodb.net/
