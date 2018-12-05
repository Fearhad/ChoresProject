const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const choresSchema = new Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  assignedTo: { type: Schema.Types.ObjectId, ref: 'Children' },
  canBid: Boolean,
  bidValue: Number,
  frequency: String
});

const Chores = mongoose.model("Chores", choresSchema);

module.exports = Chores;