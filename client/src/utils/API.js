import axios from "axios";

export default {
  // Gets all the portfolio information
  getAll: function() {
    console.log("here in the FE get")
    return axios.get("/api/renderPage");
  },
  // Deletes the book with the given id
  deleteProject: function(id) {
    return axios.delete("/api/project/" + id);
  },
  // Saves a book to the database
  saveProject: function(projectData) {
    return axios.post("/api/project", projectData);
  }
};
