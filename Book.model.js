var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  author: String,
  isbn_13: String,
  isbn_10: String,
  img_url: String
});

module.exports = mongoose.model("Book", BookSchema);
