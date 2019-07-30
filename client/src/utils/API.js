import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("we hit client",bookData)
    return axios.post("/api/books", bookData);
  },
  // Retrieve search results from Google Books
  getGoogleBooks: function(name){
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + name)
  }
};
