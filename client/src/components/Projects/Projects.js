import React, { Component } from 'react'
import './Projects.css'
import API from "../../utils/API";

export default class Projects extends Component {
	state = {
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
		    portImage: data.portfolio[0].portImg,
		    portName: data.portfolio[0].name,
		    portDes: data.portfolio[0].projectDes,
        })
    })
      .catch(err => console.log(err));
  };
	render() {
		return (
			<div>
				THIS IS THE PROJECTS PAGE
				{this.state.portName}
			</div>
		)
	}
} 