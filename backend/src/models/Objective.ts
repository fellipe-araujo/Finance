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
  progress: {
    type: Number,
    default: 0.0
  },
  description: {
    type: String,
  }
});

const Objective = mongoose.model('Objective', ObjectiveSchema);

export default Objective;
