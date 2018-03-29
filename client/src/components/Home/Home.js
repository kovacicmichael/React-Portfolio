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
  	console.log("loadpage");
    API.getAll()
      .then(res =>{
      	console.log(res.data)
      	const data = res.data
        this.setState({ 
        	aboutbioImgae:data.about[0].bioImg,
		   	aboutName: data.about[0].name,
		    aboutBio: data.about[0].bio,
		    homeBackImg: data.homepage[0].bckImage,
		    homeMessage: data.homepage[0].message,
		    homeTitle: data.homepage[0].title,
		    portImage: data.portfolio[0].portImg,
		    portName: data.portfolio[0].name,
		    portDes: data.portfolio[0].projectDes,
        })
    })
      .catch(err => console.log(err));
  };



//style={{backgroundImage: "url(" + this.state.homeBackImg + ")"}}
	render() {
		
		return (

			<Router>
			<wrapper>
		        <div class= "fluid-container" >
		          <Navbar />
		          	<div class="fluid-container">
						<Jumbotron style={{backgroundImage: "url(" + this.state.homeBackImg + ")"}}>
							<div class="text">
								<h2>{this.state.homeMessage}</h2>
								<p>{this.state.homeTitle}</p>
								<br />
								
								<Button class="btnPrimary">Learn More About Me</Button>
								
							</div>
						</Jumbotron>
						
					</div>

					<About />
					<Skills />
					
				</div>
				<Footer />
			</wrapper>
			</Router>
		)
	}
} 