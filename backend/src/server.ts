import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect(
  'mongodb+srv://finance:fk100317@cluster0.xgprq.mongodb.net/finance?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.json());

require('./controllers/AuthController')(app);
require('./controllers/AccountController')(app);
require('./controllers/CategoryController')(app);
require('./controllers/FinanceController')(app);
require('./controllers/ObjectiveController')(app);
require('./controllers/UserController')(app);

app.listen(3333);
