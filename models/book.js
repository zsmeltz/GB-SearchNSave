const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gBookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  thumbnail: { type: String, required: true },
  description: { type: String, required: true },
  view: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("savedbooks", gBookSchema);

module.exports = Book;
