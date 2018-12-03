const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const familySchema = new Schema({
   
    familyName: { type: String, required: true, trim: true},
    parents: [{
      userName: { type:String, required: true },
      password: String,
    }],
    familyEmail: String,
    choresList: [{ type: Schema.Types.ObjectId, ref: 'Chores' }],      
    children: [{ type: Schema.Types.ObjectId, ref: 'Children'}]
});

const Family = mongoose.model("Family", familySchema);

module.exports = Family;