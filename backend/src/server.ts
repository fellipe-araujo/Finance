import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import cors from 'cors';

const app = express();

mongoose.connect(
  'mongodb+srv://finance:fk100317@cluster0.xgprq.mongodb.net/finance?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
