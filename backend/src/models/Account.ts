import mongoose from 'mongoose';

const AccountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    default: 0.0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

const Account = mongoose.model('Account', AccountSchema);

export default Account;
