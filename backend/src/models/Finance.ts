import mongoose from 'mongoose';

const FinanceSchema = new mongoose.Schema({
  expense: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Finance = mongoose.model('Finance', FinanceSchema);

export default Finance;
