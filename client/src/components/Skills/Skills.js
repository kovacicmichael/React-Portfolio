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
							<div>
								<img class="image" src="http://www.bobbyberberyan.com/wp-content/uploads/2016/12/ES6LOGO.svg" height="150px" width="125px"></img>
								<img class="image" src="http://qinematic.com/wp-content/uploads/2016/03/js-logo.png" height="150px" width="135px"></img>
								<img class="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" height="150px" width="125px"></img>
								<img class="image" src="https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png" height="150px" width="115px"></img>
								<img class="image" src="https://cdn0.froala.com/assets/editor/docs/server/meta-social/php-e8c6425acd65e1cbc012639ad25598c7.png" height="150px" width="160px"></img>
								
							</div>
							<br/>
							<div class="title">
								
								Data
							</div>
							<div>
								<img class="image" src="https://www.seeklogo.net/wp-content/uploads/2012/03/mysql-vector1.jpg" height="150px" width="125px"></img>
								<img class="image" src="https://concordatablog.files.wordpress.com/2016/06/sequelize-logo.png" height="150px" width="150px"></img>
								<img class="image" id= "mongo" src="http://joelcox.io/scripts/logos/mongo-logo.png" height="150px" width="150px"></img>
								<img class="image" src="http://www.erikasland.com/static/images/mongoose.png" height="150px" width="150px"></img>
								<img class="image" src="https://chatsdk.co/wp-content/uploads/2016/09/firebase_logo_shot.png" height="150px" width="150px"></img>
								
							</div>
							<div class="title">
								
								Tools
							</div>
							<div>
								<img class="image" src="https://res.cloudinary.com/teepublic/image/private/s--tSt5-SQJ--/t_Preview/b_rgb:262c3a,c_limit,f_jpg,h_630,q_90,w_630/v1500169073/production/designs/1741229_1.jpg" height="150px" width="125px"></img>
								<img class="image" src="https://www.netgains.org/wp-content/uploads/2014/01/node_js.png" height="150px" width="125px"></img>
								<img class="image" src="https://avatars0.githubusercontent.com/u/9919?s=280&v=4" height="150px" width="125px"></img>
								<img class="image" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/188/landscape/npmlogo.png" height="150px" width="150px"></img>
								<img class="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_I0zRP0Q_KKgNB_UYvK5lLogEI-Fl385sjMsxt6Lg5eibDTF1" height="150px" width="150px"></img>
								<img class="image" src="https://smellyc0de.files.wordpress.com/2018/03/firebase-authentication-vert-light.png" height="150px" width="150px"></img>
								
							</div>
							<div class="title">
								
								Frameworks
							</div>
							<div>
								<img class="image" src="https://camo.githubusercontent.com/647e291a5fd52d50e01deb82f9392c462df148a6/687474703a2f2f617070732e6f63746f636f6e73756c74696e672e636f6d2f696d616765732f6578707265737349636f6e2e706e67" height="150px" width="125px"></img>
								<img class="image" src="http://www.jsweet.org/wp-content/uploads/2016/04/react-logo-300x289.png" height="150px" width="125px"></img>
								<img class="image" src="https://www.javatpoint.com/bootstrappages/images/bootstrap-tutorial.png" height="150px" width="125px"></img>
								<img class="image" src="http://www.webosmotic.com/assets/images/technologies/materialize.png" height="150px" width="150px"></img>
															
							</div>
							<div class="title">
								
								Deployment
							</div>
							<div>
								<img class="image" src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/04/1461122387heroku-logo.jpg" height="150px" width="125px"></img>
								<img class="image" src="http://davismj.me/images/blog/2015-4-24-deploy-to-gh-pages.jpg" height="150px" width="150px"></img>
									
							</div>
					</div>
						
						
				</div>
			</div>
		)
	}
} 