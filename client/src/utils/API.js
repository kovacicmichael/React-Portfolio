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
  },

  //gets the appropriate project for the modal
  getProject: function(id){
    console.log("here")
    return axios.get("/portfolioModal/" + id);
  },
  // Deletes the project with the given id
  deleteProject: function(id) {
    return axios.delete("/portfolio/" + id);
  },
  // Deletes the project with the given id
  updateProject: function(id) {
    return axios.post("/portfolio/" + id);
  },
  // saves new project to portfolios
  saveProject: function(projectData) {
    return axios.post("/portfolio", projectData);
  },
  //gets all existing contacts from contacts
  getContacts: function() {
    return axios.get("/contacts");
  },
  //gets all existing contacts from contacts
  deleteContact: function(id) {
    return axios.delete("/contacts/" + id);
  }
};






