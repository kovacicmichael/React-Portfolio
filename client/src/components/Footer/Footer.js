import React, { Component } from 'react';
import {Grid, Col, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Footer.css';
import API from "../../utils/API";
import firebaseConfig from '../../firebase.js';

let database = firebaseConfig.database();
const auth = firebaseConfig.auth();

export default class Footer extends Component {


state = {

	username: "",
	password: ""
}

handleInputChange = event => {
	console.log(event.target.value)
	const { name, value } = event.target;
    this.setState({
      [name]: value
    });
}

handleLoginSubmit = event => {
	console.log('here')
	event.preventDefault();
	database.ref().push({
      username: this.state.username
      //dateAdded: firebaseConfig.database.ServerValue
    }).then(function(error, res){
    	if(error){
    		console.log(error)
    	}
    	console.log('added')
    })

    const promise = auth.signInWithEmailAndPassword(this.state.username, this.state.password);
    
    promise.catch(error => console.log(error.message));
    
    auth.onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
      	console.log('loggerd in')
        console.log(firebaseUser);
        window.location = "/Admin";
      }
      else {
      	event.preventDefault();
        console.log("Not logged in");
        window.location = "/";
      }
    });
}

handleSignUp = event => {
	event.preventDefault();

	database.ref().push({
      username: this.state.username,
      //dateAdded: firebaseConfig.database.ServerValue.TIMESTAMP
    });
    const promise =  auth.createUserWithEmailAndPassword(this.state.username, this.state.password);
    promise.catch(error => console.log(error.message));
    auth.onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
      	console.log('logged in')
        console.log(firebaseUser);
        //window.location = "/search";
      }
      else {
        console.log("Not logged in");
      }
    })
}

openModal = event => {
	//toggles the modal on
      var buttonId = event.target.id;
      document.getElementById("modal-container-footer").removeAttribute("class");
      document.getElementById("modal-container-footer").classList.add(buttonId);
      document.getElementsByTagName("body")[2].classList.add('modal-active');
}


closeModal = event => {
      
      document.getElementById("modal-container-footer").classList.add("out");
      document.getElementsByTagName("body")[2].removeAttribute('modal-active');
  }

preventModalClose = (event) => {
    event.stopPropagation();
}



	render() {
		return (
			
			<body>
					<div id="modal-container-footer" onClick = {this.closeModal}>
		              <div class="modal-background-footer" >
		                <div class="modal-footer" onClick = {this.preventModalClose}>
		                  
							<form id="footer">
							    <p class="h4 text-center mb-4">Sign in</p>
							    <label for="defaultFormLoginEmailEx" class="grey-text">Your email</label>
							    <input 
							    	type="email" 
							    	id="defaultFormLoginEmailEx" 
							    	onChange={this.handleInputChange} 
							    	class="form-control" 
							    	value={this.state.username} 
							    	name="username"
							    />

							    <br/>

							    <label for="defaultFormLoginPasswordEx" class="grey-text">Your password</label>
							    <input 
							    	type="password" 
							    	id="defaultFormLoginPasswordEx" 
							    	class="form-control" 
							    	onChange={this.handleInputChange}
							    	value={this.state.password} 
							    	name="password"
							    />

							    <div class="text-center mt-4">
							        <button id="anchorBtn" class="btn btn-indigo" type="submit" onClick={this.handleLoginSubmit}>Login</button>
							        <button id="anchorBtn" class="btn btn-indigo" type="submit" onClick={this.handleSignUp}>Sign Up</button>
							    </div>
							</form>
		                </div>
		              </div>
		            </div>
	            
				<footer>
					This is the footer
					<br />
	      
					<a id="two" class="buttonFooter" onClick = {this.openModal}>Admin </a>

				</footer>
			</body>

		)
	}
} 