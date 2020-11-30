import axios from "axios";

// eslint-disable-next-line
export default {
  // Gets all saved books
  getBooks: function() {
    return axios.get("/api/savedbooks");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/savedbooks/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log(bookData);
    return axios.post("/api/savedbooks", bookData);
  }
};