import React, { Component } from 'react'
import {Grid, Col, Image } from 'react-bootstrap'
import './Skills.css'
import API from "../../utils/API";

export default class Skills extends Component {
	state = {
    aboutbioImage:"",
   	aboutName: "",
    aboutBio: "",
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
        })
    })
      .catch(err => console.log(err));
  };
	render() {
		return (
			<div class="skills">
				<div className="container containerSkills">
					<div class="row">
							<div class="skillTitle">
								Technology
							</div>
					</div>
					<div class="row">
							<div class="offerTitle">
								What I Can Offer
							</div>
					</div>
					<div class= "skillContainer">
							<div class="title">
								
								Languages
							</div>
							<div class="well">
								<img class="image" src="https://s3.us-east-2.amazonaws.com/personalportfolio1/ES6LOGO.svg" height="125px" width="100px"></img>
								<img class="image" src="https://s3.us-east-2.amazonaws.com/personalportfolio1/js-logo.png" height="125px" width="110px"></img>
								<img class="image" src="https://s3.us-east-2.amazonaws.com/personalportfolio1/html.png" height="125px" width="100px"></img>
								<img class="image" src="https://s3.us-east-2.amazonaws.com/personalportfolio1/css3.png" height="125px" width="80px"></img>
								<img class="image" src="https://s3.us-east-2.amazonaws.com/personalportfolio1/php-logo.png" height="125px" width="135px"></img>
								
							</div>
							<br/>
							<div class="title">
								
								Data
							</div>
							<div class= "well">
								<img class="image" src="https://s3.us-east-2.amazonaws.com/personalportfolio1/mysql.svg" height="125px" width="100px"></img>
								<img class="image" src="https://s3.us-east-2.amazonaws.com/personalportfolio1/sequelize.png" height="100px" width="225px"></img>
								<img class="image" src="https://s3.us-east-2.amazonaws.com/personalportfolio1/mongodb-logo-1.png" height="125px" width="125px"></img>
								<img class="image" src="https://s3.us-east-2.amazonaws.com/personalportfolio1/mongoose.jpg" height="125px" width="200px"></img>
								<img class="image" src="https://s3.us-east-2.amazonaws.com/personalportfolio1/logo-standard.png" height="125px" width="225px"></img>
								
							</div>
							<div class="title">
								
								Tools
							</div>
							<div class= "well">
								<img class="image" src="https://s3.us-east-2.amazonaws.com/personalportfolio1/mern.jpg" height="125px" width="100px"></img>
								<img class="image" src="https://s3.us-east-2.amazonaws.com/personalportfolio1/node_js.png" height="125px" width="100px"></img>
								<img class="image" src="https://s3.us-east-2.amazonaws.com/personalportfolio1/github-512.png" height="125px" width="100px"></img>
								<img class="image" src="https://s3.us-east-2.amazonaws.com/personalportfolio1/npm-logo.png" height="125px" width="125px"></img>
								<img class="image" src="https://s3.us-east-2.amazonaws.com/personalportfolio1/passport.png" height="125px" width="125px"></img>
								<img class="image" src="https://s3.us-east-2.amazonaws.com/personalportfolio1/firebase-authentication-vert-light.png" height="125px" width="125px"></img>
								
							</div>
							<div class="title">
								
								Frameworks
							</div>
							<div class= "well">
								<img class="image" src="https://s3.us-east-2.amazonaws.com/personalportfolio1/express.png" height="125px" width="125px"></img>
								<img class="image" src="https://s3.us-east-2.amazonaws.com/personalportfolio1/ReactJS.png" height="125px" width="100px"></img>
								<img class="image" src="https://s3.us-east-2.amazonaws.com/personalportfolio1/bootstrap-tutorial.png" height="125px" width="100px"></img>
								<img class="image" src="https://s3.us-east-2.amazonaws.com/personalportfolio1/materialize1.png" height="125px" width="125px"></img>
															
							</div>
							<div class="title">
								
								Deployment
							</div>
							<div class= "well">
								<img class="image" src="https://s3.us-east-2.amazonaws.com/personalportfolio1/heroku.png" height="125px" width="100px"></img>
								<img class="image" src="https://s3.us-east-2.amazonaws.com/personalportfolio1/gitPages.png" height="125px" width="225px"></img>
									
							</div>
					</div>
						
						
				</div>
			</div>
		)
	}
} 