import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import cors from 'cors';

const app = express();

mongoose.connect(`${process.env.MONGO_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
