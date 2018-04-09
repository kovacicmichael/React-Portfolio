import React, { Component } from 'react'
import {Grid, Col, Image } from 'react-bootstrap'
import './About.css'
import API from "../../utils/API";








export default class About extends Component {
	state = {
    aboutbioImage:"",
   	aboutName: "",
    aboutBio: "",
  	};

  	// constructor(props) {
	  //   super(props);
	  //   // create a ref to store the textInput DOM element
	  //   this.aboutSect = React.createRef();
	  //   //this.focusTextInput = this.focusTextInput.bind(this);
	  //   //this.aboutSect = element => {
   //    		//this.textInput = element;
   //    	//}
	  // }

  componentDidMount() {
    this.loadPage();

    (function() {

		  'use strict';

		  // define variables
		  var items = document.querySelectorAll(".timeline li");

		  // check if an element is in viewport
		  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
		  function isElementInViewport(el) {
		    var rect = el.getBoundingClientRect();
		    return (
		      rect.top >= 0 &&
		      rect.left >= 0 &&
		      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		    );
		  }

		  function callbackFunc() {
		    for (var i = 0; i < items.length; i++) {
		      if (isElementInViewport(items[i])) {
		        items[i].classList.add("in-view");
		      }
		    }
		  }

		  // listen for events
		  window.addEventListener("load", callbackFunc);
		  window.addEventListener("resize", callbackFunc);
		  window.addEventListener("scroll", callbackFunc);

		})();
  }

  loadPage = () => {
  	console.log("loadpage")
    API.getAll()
      .then(res =>{
      	console.log(res.data)
      	const data = res.data
        this.setState({ 
        	aboutbioImage:data.about[0].bioImg,
		   	aboutName: data.about[0].name,
		    aboutBio: data.about[0].bio,
        })
        console.log(this.state.aboutbioImage)
    })
      .catch(err => console.log(err));
  };
	render() {
		return (
			<div className="About" id="aboutInfo" ref={this.aboutSect}>
				<div className="container containerAbout">
					<Col md={12}>
						<div class="aboutTitle">
							About Me
						</div>
					</Col>
					<Col md={3} mdOffset={1}>
						<Image src = {this.state.aboutbioImage} className = 'about-profile-pic' rounded="100%" height="225px" width="225px"/>
					</Col>
					<Col md={7}>
						<div className= "bioContent">
							<p class="missionStatement">{this.state.aboutBio}</p>
							
						</div>
					</Col>
				</div>
				<div className="container">
					<section class="intro">
					    <div class="container timelineContainer">
					      <h1>Past Experience</h1>
					    </div>
					  </section>

					  <section class="timeline">
					    <ul>
					      <li>
					        <div>
					          <time>April 2018</time> 
					          <h3 class="timelineTitle">Graduate DU Coding Bootcamp</h3>An intensive Full Stack program for full stack developers. Languages include: HTML5, CSS3, JavaScript, jQuery, Node.js, Express.js, React.js, Database Theory, MongoDB, MySQL, Command Line, Git.
					        </div>
					      </li>
					      <li>
					        <div>
					          <time>February 2016 - August 2017</time> 
					          <h3 class="timelineTitle">Community Health Facilitator - Peace Corps</h3>Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. Suspendisse finibus mauris et bibendum molestie. Aenean ex augue, varius et pulvinar in, pretium non nisi.
					        </div>
					      </li>
					      <li>
					        <div>
					          <time>1940</time> Proin iaculis, nibh eget efficitur varius, libero tellus porta dolor, at pulvinar tortor ex eget ligula. Integer eu dapibus arcu, sit amet sollicitudin eros.
					        </div>
					      </li>
					      <li>
					        <div>
					          <time>1943</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
					        </div>
					      </li>
					      <li>
					        <div>
					          <time>1946</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
					        </div>
					      </li>
					      <li>
					        <div>
					          <time>1956</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
					        </div>
					      </li>
					      <li>
					        <div>
					          <time>1957</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
					        </div>
					      </li>
					     
					    </ul>
					  </section>





				</div>


			</div>
		)
	}
} 