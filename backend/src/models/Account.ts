import mongoose from 'mongoose';

const AccountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

const Account = mongoose.model('Account', AccountSchema);

export default Account;
