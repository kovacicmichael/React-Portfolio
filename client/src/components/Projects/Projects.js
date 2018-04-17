import React, { Component } from 'react'
import './Projects.css'
import API from "../../utils/API";
import {Grid, Col, Image } from 'react-bootstrap'


// style={{ backgroundImage: 'url(' + this.state.image + ')'}}


export default class Projects extends Component {
	state = {
    projects: [],
    image: "",
    name: "",
    description: "",
    urlGit: "",
    urlLive: "",
    techUsed:[]
  };

  componentDidMount() {
    this.loadPage();

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
            description: data.portDes,
            urlGit: data.githubURL,
            urlLive: data.liveLink,
            techUsed: data.techUsed
        })
    })
      .catch(err => console.log(err));
    //toggles the modal on
      var buttonId = event.target.id;
      document.getElementById("modal-container").removeAttribute("class");
      document.getElementById("modal-container").classList.add(buttonId);
      document.getElementsByTagName("body")[1].classList.add('modal-active');

  };

  closeModal = (event) => {
      
      document.getElementById("modal-container").classList.add("out");
      document.getElementsByTagName("body")[1].removeAttribute('modal-active');
  }

  preventModalClose = (event) => {
    event.stopPropagation();
  }


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
    				<div id="modal-container" onClick = {this.closeModal}>
              <div className="modal-background" >
                <div className="modal" onClick = {this.preventModalClose}>
                  <h2 class="modalTitle">{this.state.name}</h2>
                  <div className="modalLeft col-md-12">
                  <img id="modalImage" src= {this.state.image} width="250px" height="250px" />
                  </div>
                  <div className="modalRight col-md-12">
                    <div className="row">
                      <p class="description">{this.state.description}</p>
                    </div>
                    <br/>
                    <div className="row">
                      <h4 id="col-md-12">Technologies Used</h4>
                    </div>
                    <div className="row">
                      <ul class="techList">
                        <div class="techItemContain">
                        {this.state.techUsed.map(tech => (
                          <li class="techItem">{tech}</li>
                          ))}
                        </div>
                      </ul>
                    </div>
                    <div className="row">
                      <a className="anchorLink"href = {this.state.urlGit} target= "_blank">
                        <svg className="fab fa-github-square link">
                        </svg>
                      </a>
                      <br />
                      {this.state.urlLive ? (

                        <a className="anchorLink" href = {this.state.urlLive} target= "_blank">
                          <svg className="fa fa-link link">
                          </svg>
                        </a>
                        ) : ("") }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content container projects">
              <h1>Recent Projects</h1>
              <div class="buttons containerImg">

                {this.state.projects.map(project => (
                
                    <div class="imgContainer">
                      <img src={project.portImg} id="one" class="button" key={project._id} reactid= {project._id} onClick = {this.renderDetails} ></img>
                      <div class="text">{project.name}</div>
                    </div>
                
                ))}
              </div>
            </div>
			   </div>
      </body>
		)
	}
} 








