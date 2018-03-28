import axios from "axios";

export default {
  // Gets all the portfolio information
  getAll: function() {
    console.log("here in the FE get")
    return axios.get("/api/renderPage");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
