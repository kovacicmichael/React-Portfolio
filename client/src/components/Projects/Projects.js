import React, { Component } from 'react'
import './Projects.css'
import API from "../../utils/API";


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


    //this code toggles off the modal
    document.getElementsByClassName("modal")[0].onclick = function(event){
        
        event.stopPropagation();
        //console.log('modal is clicked');
      }
    document.getElementById("modal-container").onclick = function(){
      this.setAttribute('class', 'out');
      document.getElementsByTagName("body")[1].removeAttribute('modal-active');
    };

    console.log(this.state.projects)

  }

//this will render the proper project details on the click of its image
  renderDetails = (event) => {

    const clicked = event.target
    let projectId = clicked.getAttribute("reactid");
    console.log(projectId)


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

  
      var buttonId = event.target.id;
      document.getElementById("modal-container").removeAttribute("class");
      document.getElementById("modal-container").classList.add(buttonId);
      document.getElementsByTagName("body")[1].classList.add('modal-active');

  };


  loadPage = () => {
  	console.log("loadpage")
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
                  <img src= {this.state.image} />
                  <p>{this.state.description}</p>
                  <a id="link" href = {this.state.urlGit} target= "_blank"> Check Out Its ReadMe </a>
                  <br />
                  {this.state.urlLive ? (

                    <a id="link" href = {this.state.urlGit} target= "_blank"> This Site is Live! </a>
                    ) : ("") }
                  <iframe src="https://www.w3schools.com"></iframe>



                  {/*<svg class="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
                            <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
                          </svg>
                        */}
                </div>
              </div>
            </div>
            <div class="content">
              <h1>Projects Go Below</h1>
              <div class="buttons">

                {this.state.projects.map(project => (

                    <div id="one" class="button" key={project._id} reactid= {project._id} onClick = {this.renderDetails} >{project.name}</div>

                ))}
                
                
              </div>
            </div>
			   </div>
      </body>
		)
	}
} 