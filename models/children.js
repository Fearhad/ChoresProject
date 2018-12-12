const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const childrenSchema = new Schema({
  name: { type: String, required: true },
  points: { type: Number, required: true },
  assignedchores: [{ type: Schema.Types.ObjectId, ref: 'chores' }],
  badgesEarned: [String],
  image: [String]
});

const children = mongoose.model("children", childrenSchema);

module.exports = children;