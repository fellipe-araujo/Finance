import mongoose from 'mongoose';

const ObjectiveSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  goal: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    default: 0.0,
  },
  progress: {
    type: Number,
    default: 0.0,
  },
  description: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

const Objective = mongoose.model('Objective', ObjectiveSchema);

export default Objective;
