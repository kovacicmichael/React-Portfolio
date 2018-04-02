import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {

state = {
	activeName: ""
}


validateForm = () => {
	console.log("inside of the validateForm")

	let name =  document.getElementById('name').value;
    if (name == "") {
        document.getElementById('status').innerHTML = "Name cannot be empty";
        return false;
    }
    let email =  document.getElementById('email').value;
    if (email == "") {
        document.getElementById('status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.getElementById('status').innerHTML = "Email format invalid";
            return false;
        }
    }
    let subject =  document.getElementById('subject').value;
    if (subject == "") {
        document.getElementById('status').innerHTML = "Subject cannot be empty";
        return false;
    }
    let message =  document.getElementById('message').value;
    if (message == "") {
        document.getElementById('status').innerHTML = "Message cannot be empty";
        return false;
    }
    document.getElementById('status').innerHTML = "Sending...";
    document.getElementById('contact-form').submit();

}

toggleForm = () => {
	console.log("toggle")
		this.setState({
			activeName: "active"
		})
	
}

toggleValdate = () => {
	console.log("here in val")
	if(document.getElementById('name').value === ""){
		this.setState({
			activeName: ""
		})
	}
}





	render() {
		return (
			<div className= "container contactContainer" >
				
			
				<section class="section" onClick={this.toggleValdate}>

				    <h2 class="section-heading h1 pt-4">Contact us</h2>
				    <p class="section-description">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
				        matter of hours to help you.</p>

				    <div class="row">

				        <div class="col-md-8 col-xl-9">
				            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

				                <div class="row">

				               
				                    <div class="col-md-6">
				                        <div class="md-form">
				                            <input type="text" id="name" name="name" class="form-control" onClick={this.toggleForm} />
				                            <label for="name" class={this.state.activeName}>Your name</label>
				                        </div>
				                    </div>

				                 
				                    <div class="col-md-6">
				                        <div class="md-form">
				                            <input type="text" id="email" name="email" class="form-control" />
				                            <label for="email" class={this.state.activeEmail}>Your email</label>
				                        </div>
				                    </div>
				                 

				                </div>

				            
				                <div class="row">
				                    <div class="col-md-12">
				                        <div class="md-form">
				                            <input type="text" id="subject" name="subject" class="form-control" />
				                            <label for="subject" class={this.state.activeSubject}>Subject</label>
				                        </div>
				                    </div>
				                </div>
				           

				              
				                <div class="row">

				                  
				                    <div class="col-md-12">

				                        <div class="md-form">
				                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
				                            <label for="message" class={this.state.activeMessage}>Your message</label>
				                        </div>

				                    </div>
				                </div>
				               

				            </form>

				            <div class="center-on-small-only">
				                <a class="btn btn-primary" onClick= {this.validateForm}>Send</a>
				            </div>
				            <div id="status"></div>
				        </div>
				      
				        <div class="col-md-4 col-xl-3">
				            <ul class="contact-icons">
				                <li><i class="fa fa-map-marker fa-2x"></i>
				                    <p>San Francisco, CA 94126, USA</p>
				                </li>

				                <li><i class="fa fa-phone fa-2x"></i>
				                    <p>+ 01 234 567 89</p>
				                </li>

				                <li><i class="fa fa-envelope fa-2x"></i>
				                    <p>contact@mdbootstrap.com</p>
				                </li>
				            </ul>
				        </div>
				      

				    </div>

				</section>
		
                      
			</div>
		)
	}
} 