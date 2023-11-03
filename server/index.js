import express from 'express';
import  bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'
const app = express();

 app.use('/posts',postRoutes);

const CONNECTION_URL='mongodb+srv://gayatri:gayatri123@cluster0.w993pdj.mongodb.net/'
const PORT=process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));


