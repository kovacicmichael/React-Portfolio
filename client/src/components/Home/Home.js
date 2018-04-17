import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import './Home.css'
import API from "../../utils/API";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import About from '../About';
import Projects from '../Projects';
import Skills from '../Skills';
import Footer from '../Footer';
import Contact from '../Contact';
import path from "path";
import scrollToElement from 'scroll-to-element';
import Clipboard from "clipboard";



/*
found this function here 
http://stackoverflow.com/a/26831113
*/

// function inViewport($el) {
//     var H = window.document.height(),
//         r = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
//     return Math.max(0, t>0? H-t : (b<H?b:H));  
// }

// window.document.on("scroll resize", function(){
//   var window_offset = inViewport(document.getElementsByClassName("intro")); 
//   document.getElementsByClassName("overlay").height(window_offset);
//   document.getElementsByClassName("caption").css("bottom", (window_offset / 4) );
// });
// For copying to clipboard
var clip = new Clipboard('.copyToClipboard');

clip.on("success", function() {
  document.body.insertAdjacentHTML('beforeend', '<div>that worked.</div>');
});
clip.on("error", function() {
  document.body.insertAdjacentHTML('beforeend', '<div>that didn\'t work.</div>');
});

export default class Home extends Component {
  state = {
    homeBackImg: "",
    homeMessage: "",
    homeTitle: "",
  };

  componentDidMount() {
    this.loadPage();
    
  }

  loadPage = () => {
  	console.log("loadpage");API.getAll()
      .then(res =>{
      	console.log(res.data)
      	const data = res.data
        this.setState({ 
        	
		    homeBackImg: data.about[0].bckImage,
		    homeMessage: data.about[0].name,
		    homeTitle: data.about[0].title,
		    
        })
        console.log("background image: " + this.state.homeBackImg)
    })
      .catch(err => console.log(err));
    
  };

  scroll = event => {

  	scrollToElement(".About");
  }

	render() {
		
		return (

			<Router>

			<wrapper>
		        <div className= "fluid-container Home" >
		          <Navbar />
		          	<div className="fluid-container">
						<Jumbotron id = "background" >
							<div className="textHome">
								<h2 class="homeName">Hello, I'm Michael</h2>
								<p class="message">A Full-Stack Web Developer</p>
								<br />
								
								<Button className="btnPrimary" onClick={this.scroll}>Learn More About Me</Button>

								<div className="icons">
									<a href="https://www.linkedin.com/in/michael-kovacic-16076417/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
									<br />
									<a href="https://github.com/kovacicmichael" target="_blank"><i className="fab fa-github-alt"></i></a>
									<br />
									<a className="copyToClipboard" data-clipboard-text="kovacic316@gmail.com"><i className="far fa-envelope" data-toggle="tooltip" title="Click here to copy my email to your clipboard!" data-placement="bottom"></i></a>

								</div>
								
							</div>
						</Jumbotron>
						
					</div>

					<About />
					<Skills />
					<Projects />

					<Contact />
					
				</div>
				<Footer />
			</wrapper>
			
			</Router>
		)
	}
} 




// style={{backgroundImage: "url('" + this.state.homeBackImg + "')"}}