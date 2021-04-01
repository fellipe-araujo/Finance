import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

export default Transaction;
