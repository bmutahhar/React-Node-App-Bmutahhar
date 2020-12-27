var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var doctorsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  availability: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Doctor", doctorsSchema);
