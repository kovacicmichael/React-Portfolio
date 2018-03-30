import axios from "axios";

export default {
  // Gets all the portfolio information including bio and homepage
  getAll: function() {
    return axios.get("/api/renderPage");
  },

  // Updates the bio information
  updateAbout: function(about) {
    console.log(`Update About ID: ${about._id} ${about.name} ${about.bio} ${about.bioImg}`); //ID valid here
    return axios.post("/about/" + about._id, about)
    // return axios ({
    //   method: "post",
    //   url: "/about/" + about._id,
    //   data: {
    //     name: about.name,
    //     bio: about.aboutBio,
    //     bioImg: about.aboutbioImage
    //   }
  },

  //gets the appropriate project for the modal
  getProject: function(id){
    return axios.get("/portfolio/" + id);
  },
  // Deletes the project with the given id
  deleteProject: function(id) {
    return axios.delete("/api/project/" + id);

  },

  // Deletes the book with the given id
  //   deleteProject: function(id) {
  //   return axios.delete("/api/project/" + id);,
  // // Deletes the book with the given id
  
  // deleteProject: function(id) {
  //   return axios.delete("/api/project/" + id);
  // },
  // // Saves a book to the database
  saveProject: function(projectData) {
    return axios.post("/project", projectData);
  }
};






