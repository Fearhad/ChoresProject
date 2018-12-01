const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const childrenSchema = new Schema({
  name: { type: String, required: true },
  points: { type: Number, required: true },
  assignedchores: [{ type: Schema.Types.ObjectId, ref: 'Chores' }],
  badgesEarned: [String]  
});

const Children = mongoose.model("Children", childrenSchema);

module.exports = Children;