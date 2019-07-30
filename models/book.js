const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: [String],
  synopsis: String,
  link: String,
  thumbnail: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
