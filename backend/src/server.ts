import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://finance:fk100317@cluster0.xgprq.mongodb.net/finance?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get("/", (request, response) => {
  return response.json({ message: "Finance $" });
});

app.listen(3333);
