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
    portImage: "",
    portName: "",
    portDes: "",
    portClicks: 0,
  };

  componentDidMount() {
    this.loadPage();

    const className = document.getElementsByClassName("button")[0]

    className.onclick = function(){
      var buttonId = this.getAttribute('id');
      document.getElementById("modal-container").removeAttribute("class");
      document.getElementById("modal-container").classList.add(buttonId);
      document.getElementsByTagName("body")[1].classList.add('modal-active');
    };

    document.getElementById("modal-container").onclick = function(){
      this.setAttribute('class', 'out');
      document.getElementsByTagName("body")[1].removeAttribute('modal-active');
    };






  }

  loadPage = () => {
  	console.log("loadpage")
    API.getAll()
      .then(res =>{
      	console.log(res.data)
      	const data = res.data
        this.setState({ 
		    portImage: data.portfolio[0].portImg,
		    portName: data.portfolio[0].name,
		    portDes: data.portfolio[0].projectDes,
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
              <h2>{this.state.portName}</h2>
              <p>Hear me roar.</p>
              <svg class="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
                        <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
                      </svg>
            </div>
          </div>
        </div>
        <div class="content">
          <h1>Modal Animations</h1>
          <div class="buttons">
            <div id="one" class="button">Unfolding</div>
            
          </div>


        </div>


			</div>
      </body>
		)
	}
} 