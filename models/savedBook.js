const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedBooks = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  thumbnail: { type: String, required: true },
  description: { type: String, required: true },
  view: { type: String, required: true},
  date: { type: Date, default: Date.now }
});

const savedBook = mongoose.model("savedbooks", savedBooks);

module.exports = savedBook;
