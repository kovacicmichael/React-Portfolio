import React, { Component } from 'react'
import './Projects.css'
import API from "../../utils/API";
import {Grid, Col, Image } from 'react-bootstrap'


// document.getElementByClass("button").onclick(function(){
//   var buttonId = this.getAttribute('id');
//   document.getElementById.removeAttribute("class").setAttribute("class", "buttonId");
//   document.getElementsByTagName("body").setAttribute('modal-active');
// });

// document.getElementById("modal-container").onclick(function(){
//   this.setAttribute('class', 'out');
//   document.getElementsByTagName("body").removeAttribute('modal-active');
// });


export default class Projects extends Component {
	state = {
    projects: [],
    image: "",
    name: "",
    description: "",
    urlGit: "",
    urlLive: ""
  };

  componentDidMount() {
    this.loadPage();

    //const className = document.getElementsByClassName("modalButton")[0]

    // className.onclick = function(){
    //   console.log("here inthe modal function")
    //   var buttonId = this.getAttribute('id');
    //   document.getElementById("modal-container").removeAttribute("class");
    //   document.getElementById("modal-container").classList.add(buttonId);
    //   document.getElementsByTagName("body")[1].classList.add('modal-active');
    // };


    //this code prevents the modal from hiding when the modal window is clicked
    document.getElementsByClassName("modal")[0].onclick = function(event){
        event.stopPropagation();
      }
    //this code toggles the modal off
    document.getElementById("modal-container").onclick = function(){
      this.classList.add("out");
      document.getElementsByTagName("body")[1].removeAttribute('modal-active');
    };

    console.log(this.state.projects)

  }

//this will render the proper project details on the click of its image
  renderDetails = (event) => {
    //allows the get request to find the data for a specific project
    const clicked = event.target
    let projectId = clicked.getAttribute("reactid");
   
    API.getProject(projectId)
      .then(res =>{
        console.log(res.data)
        const data = res.data
        this.setState({ 
            image: data.portImg,
            name: data.name,
            description: data.projectDes,
            urlGit: data.githubURL,
            urlLive: data.liveLink
        })
    })
      .catch(err => console.log(err));
    //toggles the modal on
      var buttonId = event.target.id;
      document.getElementById("modal-container").removeAttribute("class");
      document.getElementById("modal-container").classList.add(buttonId);
      document.getElementsByTagName("body")[1].classList.add('modal-active');

  };


  loadPage = () => {
  	//gets all the project data on the page load
    API.getAll()
      .then(res =>{
      	console.log(res.data.portfolio)
      	const data = res.data
        this.setState({ 

        projects: data.portfolio

        })
    })
      .catch(err => console.log(err));
  };
	render() {
		return (
      <body>
			   <div>
				
    				<div id="modal-container">
              <div class="modal-background">
                <div class="modal">
                  <h2>{this.state.name}</h2>
                  <img id="modalImage" src= {this.state.image} />
                  <p>{this.state.description}</p>
                  <a id="link" href = {this.state.urlGit} target= "_blank"> Check Out Its ReadMe </a>
                  <br />
                  {this.state.urlLive ? (

                    <a id="link" href = {this.state.urlGit} target= "_blank"> This Site is Live! </a>
                    ) : ("") }
                  

                </div>
              </div>
            </div>
            <div class="content container">
              <h1>Projects Go Below</h1>
              <div class="buttons col-12">

                {this.state.projects.map(project => (
                
                    <div class="projectName">{project.name}
                      <img src={project.portImg} id="one" class="button" key={project._id} reactid= {project._id} onClick = {this.renderDetails} ></img>
                    </div>
                
                ))}
                
              </div>
            </div>
			   </div>
      </body>
		)
	}
} 