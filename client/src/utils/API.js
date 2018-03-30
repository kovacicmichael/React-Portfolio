import axios from "axios";

export default {
  // Gets all the portfolio information
  getAll: function() {
    return axios.get("/api/renderPage");
  },
  //gets the appropriate project for the modal
  getProject: function(id){
    return axios.get("/portfolio/" + id);
  },
  // Deletes the project with the given id
  deleteProject: function(id) {
    return axios.delete("/api/project/" + id);
  },
  // Saves a book to the database
  saveProject: function(projectData) {
    return axios.post("/api/project", projectData);
  }
};






