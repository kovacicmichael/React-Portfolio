import React, { Component } from 'react'
import {Grid, Col, Image } from 'react-bootstrap'
import './About.css'
import API from "../../utils/API";



export default class About extends Component {

  componentDidMount() {
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
		      // else{
		      // 	items[i].classList.remove("in-view");
		      // }
		    }
		  }
		  // listen for events
		  window.addEventListener("load", callbackFunc);
		  window.addEventListener("resize", callbackFunc);
		  window.addEventListener("scroll", callbackFunc);

		})();
  }

	render() {
		return (
			<div className="About" id="aboutInfo">
				<div className="container containerAbout">
					<Col md={12}>
						<div class="aboutTitle">
							About Me
						</div>
					</Col>
					<Col md={3} mdOffset={1}>
						<Image src = "https://s3.us-east-2.amazonaws.com/personalportfolio1/prof+profile+pic.jpg" className = 'about-profile-pic' rounded="100%" height="225px" width="225px"/>
					</Col>
					<Col md={7}>
						<div className= "bioContent">
							<p class="missionStatement">Full Stack Web Developer with a gift for linking technical know how to creative ideas. I am experienced in Javascript, Node.js, Express.js, MySQL and MongoDB, php, and more. I have a passion for discovery and learning, and am constantly excited about the possibilities this industry has to offer. After spending almost two years in a foreign country learning a new language, I understand the amount of effort it takes to succeed in something challenging; I love the opportunity to face a new problem and persevere until I have found the solution. Much of my time is spent attempting to increase my knowledge and experience to keep pace with a continuously growing industry. I am currently looking to apply my experience with a like minded company to help create dynamic applications that help improve its users quality of life.</p>
							
						</div>
					</Col>
				</div>
				<div className="fluid-container">
					<section class="intro">
					    <div class="container timelineContainer">
					      <h1 class="timelineIntro">Past Experience and Education</h1>
					    </div>
					  </section>

					  <section class="timeline">
					    <ul>
					      <li>
					        <div>
					          <time>April 2018</time> 
					          <h3 class="timelineTitle">Graduate University of Denver Full Stack Program</h3>
					          <h4 class="timelineSubtitle">Denver, CO</h4>An intensive program to train and equip Full-Stack Web Developers. Coursework included: HTML5, CSS3, JavaScript, jQuery, Node.js, Express.js, React.js, Database Theory, MongoDB, MySQL, Command Line, Git, and more.
					        </div>
					      </li>
					      <li>
					        <div>
					          <time>February 2016 - August 2017</time> 
					          <h3 class="timelineTitle">Community Health Facilitator - Peace Corps</h3>
					          <h4 class="timelineSubtitle">Paraguay</h4>Developed syllabus and curriculums for classroom learnings and utilized social media platforms to connect students with clubs, organizations, and resources. Designed and implemented projects revolving around self esteem, gender equality and education, and human rights.

					        </div>
					      </li>
					      <li>
					        <div>
					          <time>June 2015 - October 2015</time> 
					          <h3 class="timelineTitle">Guest Services Associate</h3>
					          <h4 class="timelineSubtitle">Hillsdale, MI</h4>Managed and trained 25 staff members while overseeing the organization and completion of various work projects and activities.  Communicated and listened to a variety of guest groups through phone calls, group orientations, and staff meetings.
					        </div>
					      </li>
					      <li>
					        <div>
					          <time>February 2015 - January 2016</time> 
					          <h3 class="timelineTitle">Substitute Teacher</h3>
					          <h4 class="timelineSubtitle">Hillsdale, MI</h4>Assume the duties of the regular classroom teacher within school rules and procedures.  Follow the teacher's lesson plan while maintaining classroom’s normal function and discipline procedures.

					        </div>
					      </li>
					      <li>
					        <div>
					          <time>May 2014</time> 
					          <h3 class="timelineTitle">Bachelor of the Arts Degree</h3>
					          <h4 class="timelineSubtitle">Spring Arbor, MI</h4>Major in Global Studies.  Key courses include: International Human Rights, Cultural Anthropology, Internationl Economics, and Spanish Language Study.
					        </div>
					      </li>
					    </ul>
					  </section>
				</div>
			</div>
		)
	}
} 