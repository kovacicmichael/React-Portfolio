import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import './Home.css'
import API from "../utils/API";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './CustomNavbar';
import About from './About';
import Projects from './Projects';


export default class Home extends Component {
  state = {
    aboutbioImgae:"",
   	aboutName: "",
    aboutBio: "",
    homeBackImg: "",
    homeMessage: "",
    homeTitle: "",
    portImage: "",
    portName: "",
    portDes: "",
    portClicks: 0,
  };

  componentDidMount() {
    this.loadPage();
  }

  loadPage = () => {
  	console.log("loadpage")
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
		// const style = {
		//   background:{
		//     backgroundImage: "url(" + this.state.homeBackImg + ")"
		//   }
		return (

			<Router>
		        <div class= "fluid-container" >
		          <Navbar />
		          	<div class="container">
						<Jumbotron style={{backgroundImage: "url(" + this.state.homeBackImg + ")"}}>
							<div class="text">
								<h2>{this.state.homeMessage}</h2>
								<p>{this.state.homeTitle}</p>
								<br />
								<Link to='/about'>
									<Button bsStyle="primary">About</Button>
								</Link>
							</div>
						</Jumbotron>
						
					</div>

					<About />
					<Projects />
				</div>
			</Router>
		)
	}
} 